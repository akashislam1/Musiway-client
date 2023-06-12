import { useForm } from "react-hook-form";

const Modal = ({ handleUpdate, data }) => {
  const { register, handleSubmit } = useForm();
  const handleClose = () => {
    window.my_modal_1.close();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <form
        method="dialog"
        className="modal-box max-w-md mx-auto"
        onSubmit={handleSubmit(handleUpdate)}
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

        <div className="modal-action mb-4">
          {/* if there is a button in form, it will close the modal */}
          <span
            className="btn normal-case hover:bg-black  text-white bg-[#cc9724]"
            onClick={handleClose}
          >
            X
          </span>
          <button
            className="btn normal-case hover:bg-black  text-white bg-[#cc9724]"
            type="submit"
          >
            Confirm Update
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
