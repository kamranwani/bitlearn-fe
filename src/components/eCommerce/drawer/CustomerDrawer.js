import DrawerButton from "components/global/form/DrawerButton";
import Error from "components/global/form/Error";
import InputArea from "components/global/form/InputArea";
import LabelArea from "components/global/form/LabelArea";
import Title from "components/global/form/Title";
import useCustomerSubmit from "hooks/useCustomerSubmit";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

const CustomerDrawer = ({ id }) => {
  const { register, handleSubmit, onSubmit, errors } = useCustomerSubmit(id);

  // console.log('##CustomerDrawer',)
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <Title
            title={"Update Customer"}
            description={"Update your Customer necessary information from here"}
          />
        ) : (
          <Title
            title={"Add Customer"}
            description={"Add your Customer necessary information from here"}
          />
        )}
      </div>

      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Name"} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Name"
                  name="name"
                  type="text"
                  placeholder={"Name"}
                />
                <Error errorName={errors.name} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Email"} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Email"
                  name="email"
                  type="email"
                  placeholder={"Email"}
                />
                <Error errorName={errors.email} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Phone"} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required
                  register={register}
                  label="Phone"
                  name="phone"
                  type="text"
                  placeholder={"Phone"}
                />
                <Error errorName={errors.phone} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={"Address"} />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required
                  register={register}
                  label="Address"
                  name="address"
                  type="text"
                  placeholder={"Address"}
                />
                <Error errorName={errors.address} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Customer" />
        </form>
      </Scrollbars>
    </>
  );
};

export default CustomerDrawer;
