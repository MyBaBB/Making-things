// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-green-800 p-4' style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }}>
      <div className='relative flex justify-center items-center border-2 border-red-700 w-full h-full'>
        <div className='border-2 border-red-400 w-full p-1 m-1 text-left'>
          <div className='flex justify-center'>
            <button onClick={toggleAccordion} className='text-blue-900 text-[4rem] font-extrabold'>
              👀Accordion Component
            </button>
          </div>
          {isOpen &&
            <p className='p-4'>
              <span>&quot;Search Engine Optimizer&quot;</span>
              <br />
              <span>&quot;Become Visible on the web 👀 &quot;</span>
              <br />
              &quot;Are you looking for a way to create fast, modern, and SEO-friendly websites? If so, you should consider using React, the most popular JavaScript library for building interactive user interfaces. React is not only easy to use and maintain, but also SEO-friendly, if you follow some best practices and strategies. With React, you can create dynamic and engaging web pages that can rank well on Google and other search engines. You can also use a React CMS to manage your content and optimize it for SEO. Whether you need a landing page, a blog, an e-commerce site, or any other kind of web application, React can help you achieve your goals and boost your online presence. To learn more about how to use React for SEO, contact us today using the form Below&quot;
              details: &quot;Are you looking for a way to create fast, modern, and SEO-friendly websites? If so, you should consider using React, the most popular JavaScript library for building interactive user interfaces. React is not only easy to use and maintain, but also SEO-friendly, if you follow some best practices and strategies. With React, you can create dynamic and engaging web pages that can rank well on Google and other search engines. You can also use a React CMS to manage your content and optimize it for SEO. Whether you need a landing page, a blog, an e-commerce site, or any other kind of web application, React can help you achieve your goals and boost your online presence. To learn more about how to use React for SEO, contact us today using the form Below&quot;
            </p>}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

