import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import CurrencyDrawer from "components/eCommerce/drawer/CurrencyDrawer";
import MainDrawer from "components/eCommerce/drawer/MainDrawer";
import CheckBox from "components/global/form/CheckBox";
import DeleteModal from "components/eCommerce/modal/DeleteModal";
import EditDeleteButton from "components/global/table/EditDeleteButton";
import ShowHideButton from "components/global/table/ShowHideButton";
import useToggleDrawer from "hooks/useToggleDrawer";
import React from "react";

//internal import

// import { SidebarContext } from '../context/SidebarContext';

const CurrencyTable = ({ currency, isCheck, setIsCheck }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  // console.log('currency',currency)

  const handleClick = (e) => {
    const { id, checked } = e.target;

    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      <MainDrawer>
        <CurrencyDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {currency?.map((currency) => (
          <TableRow key={currency._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={currency.symbol}
                id={currency._id}
                handleClick={handleClick}
                isChecked={isCheck.includes(currency._id)}
              />
            </TableCell>

            <TableCell className="text-center">
              <span className="font-medium text-sm">{currency.name}</span>
            </TableCell>

            {/* <TableCell className="text-center">
              <span className="font-medium text-sm">{currency.iso_code}</span>
            </TableCell> */}

            <TableCell className="text-center">
              <span className="font-medium text-sm">{currency.symbol}</span>
            </TableCell>

            <TableCell className="text-center">
              <ShowHideButton
                id={currency._id}
                status={currency.status}
                currencyStatusName="status"
              />
            </TableCell>

            <TableCell>
              <EditDeleteButton
                title={currency.name}
                id={currency._id}
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

export default CurrencyTable;
