import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";
import { Link } from "react-router-dom";

//internal import
import { IoRemoveSharp } from "react-icons/io5";
import useToggleDrawer from "hooks/useToggleDrawer";
import DeleteModal from "components/eCommerce/modal/DeleteModal";
import MainDrawer from "components/eCommerce/drawer/MainDrawer";
import CategoryDrawer from "components/eCommerce/drawer/CategoryDrawer";
import CheckBox from "components/global/form/CheckBox";
import ShowHideButton from "components/global/table/ShowHideButton";
import EditDeleteButton from "components/global/table/EditDeleteButton";
import { showingTranslateValue } from "utils/translate";

const CategoryTable = ({
  data,
  lang,
  isCheck,
  categories,
  setIsCheck,
  useParamId,
  showChild,
}) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck?.length < 1 && (
        <DeleteModal useParamId={useParamId} id={serviceId} title={title} />
      )}

      <MainDrawer>
        <CategoryDrawer id={serviceId} data={data} lang={lang} />
      </MainDrawer>

      <TableBody>
        {categories?.map((category) => (
          <TableRow key={category._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name="category"
                id={category._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(category._id)}
              />
            </TableCell>

            <TableCell className="font-semibold uppercase text-xs">
              {category?._id?.substring(20, 24)}
            </TableCell>
            <TableCell>
              {category?.icon ? (
                <Avatar
                  className="hidden mr-3 md:block bg-gray-50 p-1"
                  src={category?.icon}
                  alt={category?.parent}
                />
              ) : (
                <Avatar
                  src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                  alt="product"
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                />
              )}
            </TableCell>

            <TableCell className="font-medium text-sm ">
              {category?.children.length > 0 ? (
                <Link
                  to={`/categories/${category?._id}`}
                  className="text-blue-700"
                >
                  {showingTranslateValue(category?.name, lang)}

                  <>
                    {showChild && (
                      <>
                        {" "}
                        <div className="pl-2 ">
                          {category?.children?.map((child) => (
                            <div key={child._id}>
                              <Link
                                to={`/categories/${child?._id}`}
                                className="text-blue-700"
                              >
                                <div className="flex text-xs items-center  text-blue-800">
                                  <span className=" text-xs text-gray-500 pr-1">
                                    <IoRemoveSharp />
                                  </span>
                                  <span className="text-gray-500">
                                    {showingTranslateValue(child.name, lang)}
                                  </span>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                </Link>
              ) : (
                <span>{showingTranslateValue(category?.name, lang)}</span>
              )}
            </TableCell>
            <TableCell className="text-sm">
              {showingTranslateValue(category?.description, lang)}
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton
                id={category._id}
                category
                status={category.status}
              />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={category?._id}
                parent={category}
                isCheck={isCheck}
                children={category?.children}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(category?.name, lang)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CategoryTable;
