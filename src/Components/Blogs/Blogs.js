import React from "react";
import StyleBlog from "./Blogs.module.css";

const Blogs = () => {
  return (
    <section className={StyleBlog.questions_section}>
      <div className={StyleBlog.question_div}>
        <h3 className={StyleBlog.quenstion_name}>
          Difference between javascript and nodejs ?
        </h3>
        <p className={StyleBlog.answer_of_question}>
          JavaScript: Javascript can only be run in the browsers. Html dom এর
          ভিতরে এটা হয় | It is basically used on the client-side. জাভাস্ক্রিপ্ট
          যেকোন browser engine চলতে পারে v8 and safari and Spidermonkey.
          Javascript is used in frontend development.
          <br />
          NodeJs: NodeJS is a Javascript runtime environment. It is mostly used
          on the server-side. আমরা চালাতে পারি Javascript browser বাহিরে with
          the help of NodeJS. Nodejs is used in server-side development. Nodejs
          is written in C, C++ and Javascript.
        </p>
      </div>
      <div className={StyleBlog.question_div}>
        <h3 className={StyleBlog.quenstion_name}>
          When should you use nodejs and when should you use mongodb ?
        </h3>
        <p className={StyleBlog.answer_of_question}>
          Nodejs সাধারণত used হয় server side create করার জন্য | MongoDB for
          storing data. Nodejs use করে বিভিন্ন api তৈরী করা হয় যাতে mongodb ডাটা
          গুলো use করে বিভিন্ন operation চালানো হয় যেমন create, read, update,
          delete |
        </p>
      </div>
      <div className={StyleBlog.question_div}>
        <h3 className={StyleBlog.quenstion_name}>
          Differences between sql and nosql databases ?
        </h3>
        <p className={StyleBlog.answer_of_question}>
          SQL: SQL databases are vertically scalable. SQL databases are
          table-based. Requires Schema. Great with relationships.
          <br />
          NoSQL: NoSQL databases are horizontally scalable. NoSQL databases are
          document, key-value.More Flexible to changes . Not Great with complex
          relationships.
        </p>
      </div>
      <div className={StyleBlog.question_div}>
        <h3 className={StyleBlog.quenstion_name}>
          Differences between sql and nosql databases ?
        </h3>
        <p className={StyleBlog.answer_of_question}>
          JWT, or JSON Web Token, is client এবং a server এর security এর করার
          জন্য | প্রতিটি JWT-এ encoded করা JSON obect রয়েছে | token গুলো
          পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য JWTগুলি একটি cryptographic
          algorithm ব্যবহার করে | আর সেটা ঠিক মতন ensure করলে ইউসার কাজ ঠিক মতন
          করতে পারবে নাহলে পারবে না
        </p>
      </div>
    </section>
  );
};

export default Blogs;
