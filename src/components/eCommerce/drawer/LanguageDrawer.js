import DrawerButton from "components/global/form/DrawerButton";
import Error from "components/global/form/Error";
import InputArea from "components/global/form/InputArea";
import LabelArea from "components/global/form/LabelArea";
import SelectISOCode from "components/global/form/SelectISOCode";
import SwitchToggle from "components/global/form/SwitchToggle";
import Title from "components/global/form/Title";
import useLanguageSubmit from "hooks/useLanguageSubmit";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

//internal import

const LanguageDrawer = ({ id }) => {
  const {
    onSubmit,
    register,
    errors,
    handleSubmit,
    flagAndName,
    setFlagAndName,
    isSubmitting,
    languagePublished,
    setLanguagePublished,
  } = useLanguageSubmit(id);

  const { t } = useTranslation();

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title title={t("UpdateLanguage")} description={t("UpdateLanguageText")} />
        ) : (
          <Title title={t("AddLanguage")} description={t("AddLanguageText")} />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("AddLanguageName")} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Language name"
                  name="name"
                  type="text"
                  placeholder="Language name"
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label={t("AddLanguagesIsoCode")} />
              <div className="col-span-8 sm:col-span-4">
                <SelectISOCode register={register} label="ISO code" name={"iso_code"} />
                <Error errorName={errors.iso_code} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("AddLanguagesFlag")} />
              <div className="col-span-8 sm:col-span-4">
                <ReactFlagsSelect selected={flagAndName} onSelect={(code) => setFlagAndName(code)} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t("AddLanguagesPublished")} />
              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle
                  title={""}
                  handleProcess={setLanguagePublished}
                  processOption={languagePublished}
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Language" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default LanguageDrawer;
