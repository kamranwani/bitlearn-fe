import DrawerButton from "components/global/form/DrawerButton";
import Error from "components/global/form/Error";
import InputArea from "components/global/form/InputArea";
import LabelArea from "components/global/form/LabelArea";
import SwitchToggle from "components/global/form/SwitchToggle";
import Title from "components/global/form/Title";
import useAttributeSubmit from "hooks/useAttributeSubmit";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

const AttributeChildDrawer = ({ id }) => {
  const { handleSubmit, onSubmits, register, errors, published, setPublished, handleSelectLanguage } =
    useAttributeSubmit(id);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title="Add/Update Attribute Valu"
            description="Add your attribute values and necessary information from here"
          />
        ) : (
          <Title
            register={register}
            handleSelectLanguage={handleSelectLanguage}
            title="Add/Update Attribute Values"
            description="Add your attribute values and necessary information from here"
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmits)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
              <LabelArea label="Display Name" />

              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Display Name"
                  name="name"
                  type="text"
                  placeholder="Color or Size or Dimension or Material or Fabric"
                />
                <Error errorName={errors.name} />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
              <LabelArea label="Published" />

              <div className="col-span-8 sm:col-span-4">
                <SwitchToggle handleProcess={setPublished} processOption={published} />
                <Error errorName={errors.published} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Attribute" />
        </form>
      </Scrollbars>
    </>
  );
};

export default AttributeChildDrawer;
