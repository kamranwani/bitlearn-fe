import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React from "react";

//internal import
import useToggleDrawer from "hooks/useToggleDrawer";
import CheckBox from "components/global/form/CheckBox";
import ShowHideButton from "components/global/table/ShowHideButton";
import EditDeleteButton from "components/global/table/EditDeleteButton";
import MainDrawer from "components/eCommerce/drawer/MainDrawer";
import LanguageDrawer from "components/eCommerce/drawer/LanguageDrawer";
import DeleteModal from "components/eCommerce/modal/DeleteModal";

const LanguageTable = ({ languages, isCheck, setIsCheck }) => {
  const { serviceId, handleModalOpen, handleUpdate, title } = useToggleDrawer();
  // console.log("language", languages);
  const handleClick = (e) => {
    const { id, checked } = e.target;
    // console.log('click all id', id, checked);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      <MainDrawer>
        <LanguageDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {languages?.map((language, i) => (
          <TableRow key={language._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={language.name}
                id={language._id}
                handleClick={handleClick}
                isChecked={isCheck.includes(language._id)}
              />
            </TableCell>
            <TableCell>
              <span className="font-semibold uppercase text-xs"> {i + 1}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{language.name}</span>{" "}
            </TableCell>

            <TableCell>
              <span className="text-sm">{language.iso_code}</span>{" "}
            </TableCell>

            <TableCell>
              <div
                className={`text-sm flag ${language?.flag?.toLowerCase()}`}
              ></div>{" "}
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton id={language._id} status={language.status} />
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={language._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default LanguageTable;
