import {
  Badge,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "@windmill/react-ui";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
//internal import
import AttributeList from "components/eCommerce/attribute/AttributeList";
import MainDrawer from "components/eCommerce/drawer/MainDrawer";
import ProductDrawer from "components/eCommerce/drawer/ProductDrawer";
import Loading from "components/global/preloader/Loading";
import PageTitle from "components/global/Typography/PageTitle";
import { SidebarContext } from "context/SidebarContext";
import useAsync from "hooks/useAsync";
import useFilter from "hooks/useFilter";
import useProductSubmit from "hooks/useProductSubmit";
import useToggleDrawer from "hooks/useToggleDrawer";
import ProductServices from "services/ProductServices";
import { showingTranslateValue } from "utils/translate";
import SettingServices from "services/SettingServices";

const ProductDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { handleUpdate } = useToggleDrawer();
  const { attribue } = useProductSubmit(id);
  const [variantTitle, setVariantTitle] = useState([]);
  const { lang } = useContext(SidebarContext);

  const { data, loading } = useAsync(() => ProductServices.getProductById(id));
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  const currency = globalSetting?.default_currency || "$";

  const { handleChangePage, totalResults, resultsPerPage, dataTable } =
    useFilter(data?.variants);
  // console.log('data',data)

  useEffect(() => {
    if (!loading) {
      const res = Object.keys(Object.assign({}, ...data?.variants));

      const varTitle = attribue?.filter((att) =>
        // res.includes(att.title.replace(/[^a-zA-Z0-9]/g, ''))
        res.includes(att._id)
      );

      setVariantTitle(varTitle);
    }
  }, [attribue, data?.variants, loading, lang]);

  // console.log("data.variants", globalSetting);

  return (
    <>
      <MainDrawer product>
        <ProductDrawer id={id} />
      </MainDrawer>

      <PageTitle>{t("ProductDetails")}</PageTitle>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="inline-block overflow-y-auto h-full align-middle transition-all transform">
          <div className="flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
            <div className="flex-shrink-0 flex items-center justify-center h-auto">
              {data?.image[0] ? (
                <img src={data?.image[0]} alt="product" className="h-64 w-64" />
              ) : (
                <img
                  src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                  alt="product"
                />
              )}
            </div>
            <div className="w-full flex flex-col p-5 md:p-8 text-left">
              <div className="mb-5 block ">
                <div className="font-serif font-semibold py-1 text-sm">
                  <p className="text-sm text-gray-500 pr-4">
                    {t("Status")}:{" "}
                    {data.status === "show" ? (
                      <span className="text-green-400">
                        {t("ThisProductShowing")}
                      </span>
                    ) : (
                      <span className="text-red-400">
                        {t("ThisProductHidden")}
                      </span>
                    )}
                  </p>
                </div>
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400">
                  {showingTranslateValue(data?.title, lang)}
                </h2>
                <p className="uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm">
                  {t("Sku")} :{" "}
                  <span className="font-bold text-gray-500 dark:text-gray-500">
                    {/* {data?._id !== undefined && data?._id.substring(18, 24)} */}
                    {data?.sku}
                  </span>
                </p>
              </div>
              <div className="font-serif product-price font-bold dark:text-gray-400">
                <span className="inline-block text-2xl">
                  {currency}
                  {data?.prices?.price}
                  {data?.prices?.discount >= 1 && (
                    <del className="text-gray-400 dark:text-gray-500 text-lg pl-2">
                      {currency}
                      {data?.prices?.originalPrice}
                    </del>
                  )}
                </span>
              </div>
              <div className="mb-3">
                {data?.stock <= 0 ? (
                  <Badge type="danger">
                    <span className="font-bold">{t("StockOut")}</span>{" "}
                  </Badge>
                ) : (
                  <Badge type="success">
                    {" "}
                    <span className="font-bold">{t("InStock")}</span>
                  </Badge>
                )}
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium pl-4">
                  {t("Quantity")}: {data?.stock}
                </span>
              </div>
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7">
                {showingTranslateValue(data?.description, lang)}
              </p>
              <div className="flex flex-col mt-4">
                <p className="font-serif font-semibold py-1 text-gray-500 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    {t("Category")}:{" "}
                  </span>{" "}
                  {showingTranslateValue(data?.category?.name, lang)}
                </p>
                <div className="flex flex-row">
                  {JSON.parse(data?.tag).map((t, i) => (
                    <span
                      key={i + 1}
                      className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleUpdate(id)}
                  className="cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300"
                >
                  {t("EditProduct")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {data?.isCombination && variantTitle?.length > 0 && !loading && (
        <>
          <PageTitle>{t("ProductVariantList")}</PageTitle>
          <TableContainer className="mb-8 rounded-b-lg">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>{t("SR")}</TableCell>
                  <TableCell>{t("Image")}</TableCell>
                  <TableCell>{t("Combination")}</TableCell>
                  <TableCell>{t("Sku")}</TableCell>
                  <TableCell>{t("Barcode")}</TableCell>
                  <TableCell>{t("OrginalPrice")}</TableCell>
                  <TableCell>{t("SalePrice")}</TableCell>
                  <TableCell>{t("Quantity")}</TableCell>
                </tr>
              </TableHeader>
              <AttributeList
                lang={lang}
                variants={dataTable}
                currency={currency}
                variantTitle={variantTitle}
              />
            </Table>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                onChange={handleChangePage}
                label="Product Page Navigation"
              />
            </TableFooter>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default ProductDetails;
