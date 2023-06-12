import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const FeedbackModal = ({ isOpen, setIsOpen, handleUpdate, data }) => {
  const { register, handleSubmit } = useForm();

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
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(handleUpdate)}
                      className="modal-box max-w-md mx-auto"
                    >
                      <div className="mb-4">
                        <label htmlFor="id" className="block mb-2">
                          Class ID :
                        </label>
                        <input
                          id="id"
                          type="text"
                          defaultValue={data?._id}
                          className="input input-bordered input-warning w-full max-w-xs"
                          {...register("_id")}
                          readOnly
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="title" className="block mb-2">
                          Class Name :
                        </label>
                        <input
                          id="title"
                          type="text"
                          defaultValue={data?.title}
                          className="input input-bordered input-warning w-full max-w-xs"
                          {...register("title")}
                          readOnly
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="availableSeats" className="block mb-2">
                          Available Seats :
                        </label>
                        <input
                          id="availableSeats"
                          type="number"
                          className="input input-bordered input-warning w-full max-w-xs"
                          {...register("availableSeats")}
                          defaultValue={data?.availableSeats}
                          placeholder="Enter available seats"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="price" className="block mb-2">
                          Price :
                        </label>
                        <input
                          id="price"
                          type="number"
                          className="input input-bordered input-warning w-full max-w-xs"
                          {...register("price")}
                          defaultValue={data?.price}
                          placeholder="Enter price"
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
