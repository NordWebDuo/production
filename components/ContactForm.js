import React, { useState } from 'react';
import SuccessAlert from './SentSucces';
import DefaultInput from './widgets/forms/InputForm';
import { ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon, PaperAirplaneIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/outline';
import TextareaForm from './widgets/forms/TextareaForm';
import Submitbutton from './widgets/buttons/Button';
import { Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

const FormComponent = () => {
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const initialErrors = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
  
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = `${key} is required`;
      }
    });
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({data: formData}),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setIsSubmitted(true);
          setFormData(initialFormData); // Resetează formularul după trimiterea cu succes
          setErrors(initialErrors); // Resetează erorile formularului
        } else {
          console.error('Failed to submit form:', data);
          console.error('Failed to submit form:', data.error);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (

    <div>
    <form onSubmit={handleSubmit}>

<div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
          <DefaultInput
            type="text"
            label={'Name'}
            id="name"
            value={formData.name}
            handleChange={handleChange}
            placeholder="Your name"
            errors={errors.name}
            Icon={UserIcon}
          />

          <DefaultInput
            type="email"
            label={'Your Email'}
            id="email"
            value={formData.email}
            handleChange={handleChange}
            placeholder="Your email"
            errors={errors.email}
            Icon={EnvelopeIcon}
          />

          </div>

          <DefaultInput
            type="text"
            label={'Subject'}
            id="subject"
            value={formData.subject}
            handleChange={handleChange}
            placeholder="Subject"
            errors={errors.subject}
            Icon={PencilSquareIcon}
          />

          <TextareaForm
            type="textarea"
            label={'Message'}
            id="message"
            value={formData.message}
            handleChange={handleChange}
            placeholder="Message"
            errors={errors.message}
            Icon={ChatBubbleOvalLeftEllipsisIcon}

          />

<div className="flex items-center gap-2 mb-5">
        <Checkbox required color={"green"} id="terms" />
        <Label htmlFor="terms" className='text-slate-400'>
          I agree to the our <Link href="/terms" className='text-emerald-400 transition-all underline-offset-8 hover:underline'>
            privacy policy
          </Link>
        </Label>
      </div>
    
          <Submitbutton
          type={'submit'}
          title={'Send message'}
          color={'default'}
          iconPosition={'left'}
          Icon={PaperAirplaneIcon}
          />

      </form> 
      {isSubmitted && <SuccessAlert />}
</div>

  );
};

export default FormComponent;