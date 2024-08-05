import { useState } from "react";
import MapIcon from "../assets/icon-map.png";
import PhoneIcon from "../assets/icon-phone.png";
import ClockIcon from "../assets/icon-clock.png";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(3, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Invalid email address" })
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      console.log("Form submitted successfully", formData);
      setFormData({ fullName: "", email: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <div className="w-full p-14">
        <div className="flex flex-col justify-center items-center pb-10 lg:pb-24">
          <h2 className="font-semibold text-[36px] text-center py-2">
            Get In Touch With Us
          </h2>
          <p className="font-normal text-base text-center text-gray-500 max-w-[644px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="lg:flex lg:justify-around lg:px-16 ">
          <div className="pb-10 lg:w-[393px]">
            <div className="flex gap-4 py-2 lg:pb-10">
              <img className="h-6 pr-1" src={MapIcon} alt="icon maps" />
              <div>
                <h3 className="text-2xl font-medium">Address</h3>
                <p className="font-normal">
                  236 5th SE Avenue,<br></br> New York NY1000,<br></br> United
                  States
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-2 lg:pb-10">
              <img className="h-6" src={PhoneIcon} alt="icon phone" />
              <div>
                <h3 className="text-2xl font-medium">Phone</h3>
                <p className="font-normal">Mobile: +(84) 546-6789</p>
                <p className="font-normal">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex gap-4 py-2">
              <img className="h-6" src={ClockIcon} alt="icon clock" />
              <div>
                <h3 className="text-2xl font-medium">Working Time</h3>
                <p className="font-normal">
                  Monday-Friday:<br></br> 9:00-22:00
                </p>
                <p className="font-normal">
                  Saturday-Sunday:<br></br> 9:00-21:00
                </p>
              </div>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-3 lg:w-[450px]" onSubmit={handleSubmit}>
              <label className="font-medium pt-2" htmlFor="fullName">
                Your name
              </label>
              <input
                className="w-[300x] h-[75px] rounded-lg border-solid border border-gray-500 px-4 text-sm font-light"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Abc"
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
              <label className="font-medium pt-2" htmlFor="email">
                Email address
              </label>
              <input
                className="w-[300x] h-[75px] rounded-lg border-solid border border-gray-500 px-4 text-sm font-light"
                type="email"
                name="email"
                id="email"
                placeholder="abc@def.com"
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <label className="font-medium pt-2" htmlFor="">
                Subject
              </label>
              <input
                className="w-[300x] h-[75px] rounded-lg border-solid border border-gray-500 px-4 text-sm font-light"
                type="text"
                name=""
                id=""
                placeholder="This is optional"
              />
              <label className="font-medium pt-2" htmlFor="message">
                Message
              </label>
              <input
                className="w-[300x] h-[120px] rounded-lg border-solid border border-gray-500 px-4 text-sm font-light"
                type="text"
                name="message"
                id="message"
                placeholder="Hi! I'd like to ask about"
              />
              <button type="submit" className="bg-yellow-dark w-[237px] h-[55px] text-white rounded-md mt-6">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
