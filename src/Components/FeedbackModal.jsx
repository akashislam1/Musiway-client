import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";

const FeedbackModal = ({ isOpen, setIsOpen, handleFeedback, data }) => {
  const { user } = useAuth();
  const { register, handleSubmit, control } = useForm();
  const openModal = () => {
    location.reload();
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Instructor Name : {data.instructor}
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      method="dialog"
                      className="modal-box max-w-md mx-auto"
                      onSubmit={handleSubmit(handleFeedback)}
                    >
                      <div className="mb-4">
                        <label className="block mb-2 font-bold">Sender :</label>
                        <input
                          type="text"
                          defaultValue={user?.displayName}
                          className="input focus:outline-none input-warning w-full max-w-xs"
                          {...register("admin")}
                          readOnly
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 font-bold">Photo :</label>
                        <input
                          type="text"
                          defaultValue={user?.photoURL}
                          className="input focus:outline-none input-warning w-full max-w-xs"
                          {...register("photo")}
                          readOnly
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 font-bold">Date :</label>
                        <input
                          type="date"
                          className="input focus:outline-none input-warning w-full max-w-xs"
                          {...register("date", {
                            required: true,
                          })}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 font-bold">
                          Instructor Email :
                        </label>
                        <input
                          type="email"
                          defaultValue={data?.email}
                          className="input focus:outline-none input-warning w-full max-w-xs"
                          {...register("email")}
                          readOnly
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 font-bold">Stars :</label>
                        <input
                          type="text"
                          className="input input-bordered input-warning w-full max-w-xs"
                          {...register("rating", {
                            required: true,
                          })}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 font-bold">
                          Message :
                        </label>
                        <Controller
                          name="message" // Field name
                          control={control} // Control instance from useForm
                          render={({ field }) => (
                            <textarea
                              cols={30}
                              rows={8}
                              className="textarea textarea-warning w-full max-w-xs"
                              {...field}
                              placeholder="Enter your message"
                            />
                          )}
                        />
                      </div>

                      <button
                        className="btn normal-case hover:bg-black text-white bg-[#cc9724]"
                        type="submit"
                      >
                        Confirm Update
                      </button>
                    </form>
                    <div className="mt-4 text-right absolute top-0 right-4">
                      <button
                        type="button"
                        className="btn btn-sm font-bold text-xl btn-warning btn-circle"
                        onClick={openModal}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default FeedbackModal;
