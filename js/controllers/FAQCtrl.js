'use strict';

/**
 * @ngdoc function
 * @name applegoApp.controller:FAQController
 * @description
 * # FAQController
 * Controller of the applegoApp
 */
angular.module('applegoApp')
  .controller("FAQController", function ($scope) {
    console.log("FAQ Controller intialization ...");

    $scope.getMyCtrlScope = function() {
        return $scope;
    };

    $scope.categoryFilter = ""; //category: 'all'

    $scope.faqTemplate = "faqItem.html";

    $scope.faqCategories = [
        
        { num: 1, category: 'risk',      title:'Credit risk',  description: 'Credit risk management.',
            faqItems : [ //$sce.trustAsHtml()
                { num: 1, category:  'risk',      question: "What is credit risk?", answer: 'Credit risk is the risk of loss of principal or loss of a financial reward stemming from a borrower\'s failure to repay a loan or otherwise meet a contractual obligation. Credit risk arises whenever a borrower is expecting to use future cash flows to pay a current debt. Investors are compensated for assuming credit risk by way of interest payments from the borrower or issuer of a debt obligation. Read more: <a target="_blank" href="http://www.investopedia.com/terms/c/creditrisk.asp#ixzz4424G1r7O">Credit Risk Definition | Investopedia</a>'},
                { num: 2, category:  'risk',      question: "How is credit risk measured?", answer: 'Basically Credit risk is related to the price of the loan or bond. The higher the perceived credit risk, the higher the rate of interest that investors will demand for lending their capital. Credit risks are calculated based on the borrowers\' overall ability to repay. This calculation includes the borrowers\' collateral assets, revenue-generating ability and taxing authority (such as for government and municipal bonds).'}
            ]
        },
        
	{ num: 2, category: 'scoring',   title:'Risk scoring', description: 'Credit risk scoring.',
            faqItems : [
                { num: 3, category:  'scoring',   question: "What is credit (risk) scoring?", answer: 'Lenders use credit scoring in risk-based pricing in which the terms of a loan, including the interest rate, offered to borrowers are based on the probability of repayment. In general, the better a person\'s credit score, the better the rate offered to the individual by the financial institution. Basically lenders and financial institutions perform statistical analysis to access a person\'s credit worthiness.'},
                { num: 4, category:  'scoring',   question: "Why should I care about my credit score?", answer: 'Even if you’ve never given much thought to your credit score, it can have a big impact on your finances. Even though no one is ever likely to ask you directly for your score, lenders, employers, landlords, and service providers may routinely reference it as an indication of your creditworthiness. It can determine whether you get approved for a loan, rental lease, or security clearance, as well as the interest rates you pay.'},
                { num: 5, category:  'scoring',   question: "How can find out what my current credit score is?", answer: 'In some countries there is no single credit score maintained, yet all financial institutions will calculate your worthiness using similar input data. The scale and exact number may differ substantially, but the meaning is the same. You can ask your bank or other financial institution to disclose to you your own credit score. You\'ll probably have to pay, or you may even not succeed. An other possibility is to try our credit scoring engine and get your credit score absolutely for free. Please check also our related services and if still in doubt, drop us a line. we\ll be happy to explain our offer in more detail.'},
                { num: 6, category:  'scoring',   question: "What scoring systems exist?", answer: 'As '},
                { num: 7, category:  'scoring',   question: "Is the Applego scoring understandable by my bank?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 8, category:  'scoring',   question: "Can I use my score with any financial institution?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '}
            ]
        },

        { num: 3, category: 'applego', title:'Applego',    description: 'Applego service.',
            faqItems : [
                { num: 9, category:  'applego', question: "What is Applego?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 10, category: 'applego', question: "Is Applego really FREE?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 11, category: 'applego', question: "Why you provide this service for free?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 12, category: 'applego', question: "Will Applego be free for ever?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 13, category: 'applego', question: "Do I need to create user account in order to use Applego?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 14, category: 'applego', question: "Can I close my account and get all my data removed from your database?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 15, category: 'applego', question: "What partnership you offer?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 16, category: 'applego', question: "Who Applego partners with?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '}
            ]
        },

        { num: 4, category: 'security',  title:'Security',     description: 'Applego security.',
            faqItems : [
                { num: 17, category: 'security',  question: "Is it safe to use Applego service?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 18, category: 'security',  question: "What data is collected during scoring process?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 19, category: 'security',  question: "Will my data be shared with 3rd parties?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 20, category: 'security',  question: "How is my data guarder?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '}
            ]
        },

        { num: 5, category: 'usage',     title:'How to',       description: 'How to manage your score. ',
            faqItems : [
                { num: 21, category: 'usage',     question: "How can I get my current score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 22, category: 'usage',     question: "How can I manage my score history?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
                { num: 23, category: 'usage',     question: "can I get my current score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '}
            ]
        }
    ];

    $scope.faqItems = [
          { num: 1, category:  'risk',      question: "What is credit risk?", answer: 'Credit risk management related questions.'},
          { num: 2, category:  'risk',      question: "How is credit risk measured?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 3, category:  'scoring',   question: "What is credit risk score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 4, category:  'scoring',   question: "Why should I care about credit risk score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 5, category:  'scoring',   question: "How can find my current credit score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 6, category:  'scoring',   question: "What scoring systems exist?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 7, category:  'scoring',   question: "Is the scoring understandable by my bank?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 8, category:  'scoring',   question: "Can I use my score with any financial institution?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 9, category:  'applego', question: "What is Applego?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 10, category: 'applego', question: "Is Applego really FREE?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 11, category: 'applego', question: "Why you provide this service for free?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 12, category: 'applego', question: "Will Applego be free for ever?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 13, category: 'applego', question: "Do I need to create user account in order to use Applego?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 14, category: 'applego', question: "Can I close my account and get all my data removed from your database?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 15, category: 'applego', question: "What partnership you offer?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 16, category: 'applego', question: "Who Applego partners with?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 17, category: 'security',  question: "Is it safe to use Applego service?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 18, category: 'security',  question: "What data is collected during scoring process?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 19, category: 'security',  question: "Will my data be shared with 3rd parties?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 20, category: 'security',  question: "How is my data guarder?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 21, category: 'usage',     question: "How can I get my current score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 22, category: 'usage',     question: "How can I manage my score history?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '},
          { num: 23, category: 'usage',     question: "can I get my current score?", answer: 'Oscar is a decent man. He used to clean porches with pleasure. '}
    ];
  }
);

