import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

// 👇 Define type-safe values for the form
interface ConnectFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city?: string;
  age?: string;
  topic: string;
  message: string;
  captcha: string | null;
}

const initialValues: ConnectFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  age: "",
  topic: "",
  message: "",
  captcha: null,
};

// 👇 Yup Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  city: Yup.string().optional(),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .optional(),
  topic: Yup.string().required("Please select a topic"),
  message: Yup.string().required("Please enter your message"),
  captcha: Yup.string().required("Please complete the captcha"),
});

const Connect: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleSubmit = (
    values: ConnectFormValues,
    actions: FormikHelpers<ConnectFormValues>
  ) => {
    console.log("Submitted:", values);
    actions.setSubmitting(false);
    actions.resetForm();
    recaptchaRef.current?.reset();
  };

  return (
    <section className="py-16 px-6 md:px-12 md:min-h-screen flex flex-col md:items-center justify-center">
      <div className="w-full md:w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          Connect With Us
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-4 bg-white/40 backdrop-blur-sm p-4 md:p-10 rounded-lg">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold">First Name</label>
                  <Field
                    name="firstName"
                    placeholder="John"
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Last Name</label>
                  <Field
                    name="lastName"
                    placeholder="Doe"
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-semibold">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>

              {/* Phone & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold">Phone Number</label>
                  <Field
                    name="phone"
                    placeholder="+234..."
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">City (Optional)</label>
                  <Field
                    name="city"
                    placeholder="Lagos"
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage name="city" component="div" className="text-red-500 text-xs" />
                </div>
              </div>

              {/* Age & Topic */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-semibold">Age (Optional)</label>
                  <Field
                    name="age"
                    type="number"
                    placeholder="25"
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                  />
                  <ErrorMessage name="age" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Select Topic</label>
                  <Field
                    as="select"
                    name="topic"
                    className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-sm"
                  >
                    <option value="">-- Select --</option>
                    <option>Speaking Opportunity</option>
                    <option>Partnership</option>
                    <option>Press Inquiry</option>
                    <option>Something Else</option>
                  </Field>
                  <ErrorMessage name="topic" component="div" className="text-red-500 text-xs" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-semibold">Your Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-xs" />
              </div>

              {/* reCAPTCHA */}
              <div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LclqIIrAAAAABpXa5datfpy_CqLohPPfz-31Z7F"
                  onChange={(value) => setFieldValue("captcha", value)}
                />
                <ErrorMessage name="captcha" component="div" className="text-red-500 text-xs mt-2" />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black w-full text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Connect;
