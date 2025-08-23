import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaBirthdayCake,
    FaIdCard,
    FaHome,
    FaPhone,
} from "react-icons/fa";
import Card from "../../components/ui/Card";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../hooks/useAuth";

export default function UserRegister() {
    const { registerUser } = useAuth();

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        PhoneNumber: "",
        BirthDate: "",
        Address: "",
        Password: "",
        ConfirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.Password !== formData.ConfirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
        await registerUser({
            firstName: formData.FirstName,
            lastName: formData.LastName,
            userName: formData.UserName,
            email: formData.Email,
            phoneNumber: formData.PhoneNumber,
            birthDate: formData.BirthDate,
            address: formData.Address,
            password: formData.Password,
        });
        alert("User registered successfully!");
        window.location.href = "/login"; // redirect after register
        } catch (err) {
            console.error("Error occurred:", err);
        alert("Registration failed");
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
        },
    };

    const childVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
    };

  return (
    <motion.main
      className="flex items-center justify-center min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants}>
        <div className="max-w-5xl mx-auto text-center">
          <Card>
            <h1 className="text-2xl font-bold mb-6 dark:text-neutral-100">
              Register
            </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="FirstName" placeholder="First Name" value={formData.FirstName} onChange={handleChange} icon={FaUser} />
              <Input name="LastName" placeholder="Last Name" value={formData.LastName} onChange={handleChange} icon={FaUser} />
              <Input name="UserName" placeholder="Username" value={formData.UserName} onChange={handleChange} icon={FaIdCard} />
              <Input name="Email" type="email" placeholder="Email" value={formData.Email} onChange={handleChange} icon={FaEnvelope} />
              <Input name="PhoneNumber" placeholder="Phone Number" value={formData.PhoneNumber} onChange={handleChange} icon={FaPhone} />
              <Input name="BirthDate" type="date" value={formData.BirthDate} onChange={handleChange} icon={FaBirthdayCake} />
              <div className="md:col-span-2">
                <Input name="Address" placeholder="Address" value={formData.Address} onChange={handleChange} icon={FaHome} />
              </div>
              <Input name="Password" type="password" placeholder="Password" value={formData.Password} onChange={handleChange} icon={FaLock} />
              <Input name="ConfirmPassword" type="password" placeholder="Confirm Password" value={formData.ConfirmPassword} onChange={handleChange} icon={FaLock} />
              <div className="md:col-span-2">
                <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                  Register
                </Button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 hover:underline">
                Login
              </a>
            </p>
          </Card>
        </div>
      </motion.div>
    </motion.main>
  );
}
