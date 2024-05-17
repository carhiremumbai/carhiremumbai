import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ContactUsSchema } from "@/app/components/Schemas/ContactUsSchema";

const initialValues = {
  name: "",
  phone: "",
  message: "",
};

const ContactForm = ({
  isOpen,
  closeModal,
}: {
  isOpen: any;
  closeModal: any;
}) => {
  const form = useRef(null);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactUsSchema,
    onSubmit: (values) => {
      console.log(values);
      // sendEmail(values);
    },
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_0wpp4zr", "template_jgh8zx7", form.current, {
          publicKey: "j0fZm4vJFIpxfW6w2",
        })
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            // closeModal()
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      resetForm();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <div className=" sm:py-8 px-4 mx-auto max-w-screen-md">
                  <div className="flex flex-shrink-0 items-center justify-center">
                    <Link
                      href="/"
                      className="text-2xl sm:text-4xl font-semibold text-black"
                    >
                      Car Hire Mumbai
                    </Link>
                  </div>
                  <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Inquire Now? Want to send us a feedback?
                  </p>
                  <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Name
                      </label>
                      <input
                        id="text"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Name..."
                      />
                      {errors.name && touched.name ? (
                        <p className="text-[#dc2626] text-xs italic">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="tel"
                        className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="+91 9090990909"
                      />
                      {errors.phone && touched.phone ? (
                        <p className="text-[#dc2626] text-xs italic">
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your requirement
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Leave a comment..."
                      ></textarea>
                      {errors.message && touched.message ? (
                        <p className="text-[#dc2626] text-xs italic">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      disabled={!form.current}
                      className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactForm;
