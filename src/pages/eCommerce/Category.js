import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "@windmill/react-ui";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";

//internal import

import useAsync from "hooks/useAsync";
import { SidebarContext } from "context/SidebarContext";
import CategoryServices from "services/CategoryServices";
import useToggleDrawer from "hooks/useToggleDrawer";
import useFilter from "hooks/useFilter";
import DeleteModal from "components/eCommerce/modal/DeleteModal";
import BulkActionDrawer from "components/eCommerce/drawer/BulkActionDrawer";
import PageTitle from "components/global/Typography/PageTitle";
import MainDrawer from "components/eCommerce/drawer/MainDrawer";
import CategoryDrawer from "components/eCommerce/drawer/CategoryDrawer";
import UploadManyTwo from "components/global/common/UploadManyTwo";
import SwitchToggleChildCat from "components/global/form/SwitchToggleChildCat";
import TableLoading from "components/global/preloader/TableLoading";
import CheckBox from "components/global/form/CheckBox";
import CategoryTable from "components/eCommerce/category/CategoryTable";
import NotFound from "components/global/table/NotFound";

const Category = () => {
  const { toggleDrawer, lang } = useContext(SidebarContext);

  const { data, loading } = useAsync(CategoryServices.getAllCategory);
  const { data: getAllCategories } = useAsync(CategoryServices.getAllCategories);

  const { handleDeleteMany, allId, handleUpdateMany, serviceId } = useToggleDrawer();

  const { t } = useTranslation();

  const {
    handleSubmitCategory,
    categoryRef,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleChangePage,
    filename,
    isDisabled,
    handleSelectFile,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useFilter(data[0]?.children ? data[0]?.children : data);

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [showChild, setShowChild] = useState(false);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data[0]?.children.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  return (
    <>
     <PageTitle>{t("Category")}</PageTitle>
      <DeleteModal ids={allId} setIsCheck={setIsCheck} />

      <BulkActionDrawer ids={allId} title="Categories" lang={lang} data={data} isCheck={isCheck} />

      <MainDrawer>
        <CategoryDrawer id={serviceId} data={data} lang={lang} />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody className="">
          {/* <div className="flex md:flex-row flex-col gap-3 justify-end items-end"> */}
          <form onSubmit={handleSubmitCategory} className="py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex">
            {/* </div> */}
            <div className="flex justify-start w-1/2 xl:w-1/2 md:w-full">
              <UploadManyTwo
                title="Categories"
                exportData={getAllCategories}
                filename={filename}
                isDisabled={isDisabled}
                handleSelectFile={handleSelectFile}
                handleUploadMultiple={handleUploadMultiple}
                handleRemoveSelectFile={handleRemoveSelectFile}
              />
            </div>

            <div className="lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0">
              <div className="w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0">
                <Button
                  disabled={isCheck.length < 1}
                  onClick={() => handleUpdateMany(isCheck)}
                  className="w-full rounded-md h-12 text-gray-600 btn-gray"
                >
                  <span className="mr-2">
                    <FiEdit />
                  </span>

                  {t("BulkAction")}
                </Button>
              </div>
              <div className="w-full md:w-32 lg:w-32 xl:w-32  mr-3 mb-3 lg:mb-0">
                <Button
                  disabled={isCheck.length < 1}
                  onClick={() => handleDeleteMany(isCheck)}
                  className="w-full rounded-md h-12 bg-red-500 disabled  btn-red"
                >
                  <span className="mr-2">
                    <FiTrash2 />
                  </span>

                  {t("Delete")}
                </Button>
              </div>
              <div className="w-full md:w-48 lg:w-48 xl:w-48">
                <Button onClick={toggleDrawer} className="rounded-md h-12 w-full">
                  <span className="mr-2">
                    <FiPlus />
                  </span>

                  {t("AddCategory")}
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4">
        <CardBody>
          <form
            onSubmit={handleSubmitCategory}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={categoryRef}
                type="search"
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                placeholder={t("SearchCategory")}
              />
            </div>
          </form>
        </CardBody>
      </Card>

      <SwitchToggleChildCat
        title=" "
        handleProcess={setShowChild}
        processOption={showChild}
        name={showChild}
      />
      {loading ? (
        <TableLoading row={12} col={6} width={190} height={20} />
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>
                  <CheckBox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                  />
                </TableCell>

                <TableCell>{t("catIdTbl")}</TableCell>
                <TableCell>{t("catIconTbl")}</TableCell>
                <TableCell>{t("CatTbName")}</TableCell>
                <TableCell>{t("CatTbDescription")}</TableCell>
                <TableCell className="text-center">{t("catPublishedTbl")}</TableCell>
                <TableCell className="text-right">{t("catActionsTbl")}</TableCell>
              </tr>
            </TableHeader>

            <CategoryTable
              data={data}
              lang={lang}
              isCheck={isCheck}
              categories={dataTable}
              setIsCheck={setIsCheck}
              showChild={showChild}
            />
          </Table>

          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no categories right now." />
      )}
    </>
  );
};

export default Category;
