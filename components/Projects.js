import React from 'react'
import credit_card_fraud from '../public/credit_card_fraud.png'
import Ukrain_news from '../public/Ukrain_news.png'
import Wine_quaity from '../public/Wine_quaity.png'
import News_headlines from '../public/News_headlines.png'
import breast_cancer from '../public/breast_cancer.png'
import rainfall from '../public/rainfall.png'
import house_price from '../public/house_price.png'
import Image from 'next/legacy/image'

const Projects = () => {
  return (
    <section>
      <h2 className='text-5xl text-gray-800 py-1 dark:text-white font-bold'>Sample Projects</h2>  
        <div className='md:grid md:grid-cols-2 gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={Wine_quaity} alt=''/>
            <h3 className='text-2xl font-semibold pt-8 pb-2'>Wine Quality Prediction</h3>
            <p className='py-2'>A Random Forest Classifier modelling to predict the quality of white wine (vinho verde) based on several features.
.</p>
            <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>Logistic Regression, K-NN, SVM, and Decision Tree.</p> 
          </div>
          
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <a href='https://tmdbmovieapplication.netlify.app/' target="_blank">
              <Image src={credit_card_fraud} alt=''/>
              <h3 className='text-2xl font-semibold pt-8 pb-2'>Credit Fraud Detection</h3>
            </a>
        <p className='py-2'>Building Machine Learning models to predict the possibility of a credit card transaction being a fraudulent on a a hugely imbalanced dataset.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Models: </span>Logistic Regression, K-NN, SVM, and Decision Tree.</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href="https://www.yourhospicelottery.org.uk/blog/" target='_blank'>
        <Image src={yhl} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Your Hospice Lottery Blog</h3>
        </a>
        <p className='py-2'>This the blog of Your Hospice Lottery website. It is a Wordpress custom theme created from the scratch.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>Wordpress, PHP, bootstrap</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://github.com/zahratalaei/FullStackReactExpress' target="_blank">
        <Image src={FS} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Codes Up!</h3>
        </a>
        <p className='py-2'>It is a Full Stack Blog App. Being able to see, add comments and likes the posts you need to have an account and sing in to the app. Only author of the post can edit/delete it. This app is in progressing to add more functionalities such as search bar, filters and also improve the UI  </p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>React, JavaScript, React router dom, react-bootstrap, yup, bootstrap, axios, Mui, ExpressJs, bcrypt, JWT, mysql, sequelize, ... </p>
      </div>
      
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://main--shappingcart-ts-app.netlify.app/' target="_blank">
        <Image src={Shopping} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Shopping cart app!</h3>
        </a>
        <p className='py-2'>It is a shopping cart App which is created by react-typescript. Home page displays different categories. Each category is linked to its products page. This app includes a cart displaying all the selected products with the single price, total price of each item and the total price of cart. This app is in progressing to add more functionalities such as search bar, filters and also improve the UI </p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>React, typescript, React router dom, react-bootstrap, bootstrap5, axios </p>
      </div>
    </div>
 </section>
  )
}

export default Projects