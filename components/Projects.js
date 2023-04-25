import React from 'react'
import credit_card_fraud from '../public/credit_card_fraud.png'
import Ukrain_news from '../public/Ukrain_news.png'
import Wine_quaity from '../public/Wine_quaity.png'
import News_headlines from '../public/News_headlines.png'
import breast_cancer from '../public/breast_cancer.png'
import rainfall from '../public/rainfall.png'
import house_price from '../public/house_price.png'
import Four_Minings from '../public/Four_Minings.png'
import Image from 'next/legacy/image'

const Projects = () => {
  return (
    <section>
      <h2 className='text-3xl text-gray-800 py-1 dark:text-white font-bold'>Sample Projects</h2>  
        <div className='md:grid md:grid-cols-2 gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <a href='https://github.com/amir-mrd/Wine-Quality-Prediction-Random-Forest' target="_blank">
              <Image src={Wine_quaity} alt=''/>
              <h3 className='text-2xl font-semibold pt-8 pb-2'>Wine Quality Prediction</h3></a>
            <p className='py-2'>A Random Forest Classifier model to predict the quality of white wine (vinho verde) based on several features.
            .</p> 
          </div>
          
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <a href='https://github.com/amir-mrd/Credit-Fraud-Detection' target="_blank">
              <Image src={credit_card_fraud} alt=''/>
              <h3 className='text-2xl font-semibold pt-8 pb-2'>Credit Card Fraud Detection</h3>
            </a>
        <p className='py-2'>Building Machine Learning models to predict the possibility of a credit card transaction being a fraudulent on a hugely imbalanced dataset.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Models: </span>Logistic Regression, K-NN, SVM, and Decision Tree.</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href="https://github.com/amir-mrd/Breast-Cancer-Prediction-Using-ML" target='_blank'>
        <Image src={breast_cancer} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Breast Cancer Prediction</h3>
        </a>
        <p className='py-2'>This is a Machine Learning project to predict the chance of having breast cancer based on symptoms.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Models: </span>Logistic Regression, Decision Tree, Random Forest, K-NN, SVM, Naive Bayes.</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://github.com/amir-mrd/Million_News_Headlines' target="_blank">
        <Image src={News_headlines} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Million News Headlines!</h3>
        </a>
        <p className='py-2'>What can the headlines from the Australian national broadcaster (the ABC) tell us about the concerns of the Australian public over time.  </p>
        
      </div>
      
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://github.com/amir-mrd/Predicting-House-Prices-Using-Linear-Regression/' target="_blank">
        <Image src={house_price} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>House Price Prediction!</h3>
        </a>
        <p className='py-2'>Using Linear Regression to model the price of US houses based on their features and location.</p>
        
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://github.com/amir-mrd/Time-Series-Using-R/' target="_blank">
        <Image src={Four_Minings} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Stocks Time Series</h3>
        </a>
        <p className='py-2'>Analysis and Prediction of BHP stocks price (2015-2021) and comparision with three other Australian mining giants using R.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Models: </span>Naive Method, ARIMA.</p>

      </div>
    </div>
 </section>
  )
}

export default Projects