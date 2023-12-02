import DrawerButton from "components/global/form/DrawerButton";
import Error from "components/global/form/Error";
import InputArea from "components/global/form/InputArea";
import LabelArea from "components/global/form/LabelArea";
import SwitchToggle from "components/global/form/SwitchToggle";
import Title from "components/global/form/Title";
import useCurrencySubmit from "hooks/useCurrencySubmit";
import { t } from "i18next";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

//internal import

const CurrencyDrawer = ({ id }) => {
  const {
    errors,
    onSubmit,
    register,
    status,
    setStatus,
    isSubmitting,
    handleSubmit,
  } = useCurrencySubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title={t("UpdateCurrency")}
            description={t("UpdateCurrencyText")}
          />
        ) : (
          <Title title={t("AddCurrency")} description={t("AddCurrencyText")} />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("CurrenciesName")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("CurrenciesSymbol")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Symbol"
                  name="symbol"
                  type="text"
                  placeholder="Symbol"
                />
                <Error errorName={errors.symbol} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("CurrenciesEnabled")} />
              <div className="col-span-8 sm:col-span-1 text-align-left">
                <SwitchToggle
                  processOption={status}
                  handleProcess={setStatus}
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Currency" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default CurrencyDrawer;
