# Artificial Intelligence and Machine Learning

Our initial thoughts:

### Questions

- What is Artificial Intelligence?
    - intelligence -> ability to process patterns and solve problems
        - artificial intelligence -> That process done via code/ non-living entity
    - two schools of thought: focused and general AI
        - focused AI: specific purpose (like video game AI, business centric chatbot)
        - general AI: multipurpose
        - Where does chatgpt fall?
        - Where do art-based AI come in? Specifically the ones that generate new art like DALL-E
            - **PAUSE ON THIS TILL TOMORROW**

- What is Machine Learning?
    - learning -> taking what is known and known concepts and applying them to new concepts
        - Machine learning -> create new information from an existing dataset
    - Using ai to solve problems systematically programmatically *at scale*


- What is an LLM?
    - Preventing hallucinations

- What is prompt engineering

- What is computer vision?
- What is Natural Language Processing?

- What is GenAI?
- What is AI Tooling? How can I use it?
- What is GitHub copilot?

## Artificial Intelligence

Artificial intelligence, or AI, is technology that enables computers and machines to simulate human intelligence and problem-solving capabilities.
    - Human Intelligence or natural intelligence, is the ability to process patterns and solve problems
    - Often mentioned with and accompanied by Machine Learning and Deep Learing

### Weak vs Strong AI

- Weak AI or narrow AI or focused AI is artificial intelligence focused on completing a specific task
    - Amazon Alexa (isn'tused as a general AI, used for controlling smart devices and making amazon purchases)
    - Apple's Siri
    - IBM wastonx
    - Self-Driving Cars (AI with the whole purpose of controlling a car based off environmental conditions)

- Strong AI or General AI is AI focused on having general knowledge and the ability to learn and adapt as a human would. This is likely still theoretical, though it is imagined that if this were to exist it would surpass human's natural intelligence. **(Will look into further, later)**

- Another key difference between Narrow AI and Artificial General Intelligence (AGI) is their capacity for transfer learning and adaptability. Narrow AI systems are highly specialized in specific domains, such as language processing or image recognition, but struggle to apply their knowledge and skills to other areas. 

#### Where Does ChatGPT fall? What about Generative AI's like DALL-E?

ChatGPT, as impressive as it is, belongs to a category of AI known as Narrow AI. Narrow AI systems, like ChatGPT, excel at specific tasks but lack a deep understanding of content or context. They can generate relevant responses through probabilistic but cannot reason about the world in the way humans do. AGI, on the other hand, would possess the ability to understand, analyze, and reason about a wide range of problems, demonstrating a level of intelligence akin to human beings.

- GenAI falls into a subset of Narrow AI but this is something we'll explore more later


## Machine Learning 

Machine learning (ML) is a branch of artificial intelligence (AI) and computer science that focuses on the using data and algorithms to enable AI to imitate the way that humans learn, gradually improving its accuracy in classifications or predicitions.

- Steps in the Machine Learning Process:
    - Decision Process: The algorithm will attempt to predict a value or classify a new example based off previous information
    - Error Function: A way to measure how wrong the model is. Can vary based off the problem (classification/ predicition). The entire goal is to minimize error since that raises accuracy.
    - Model Optimization Process: A way for us to update the model based off the current weights held and the error function. The goal is to update the weights, which control how important specific input features are, and use that new model to hopefully achieve a lower error on the training and test sets. This is an interative approach and will repeat until a desired threshold for accuracy is acheived 


### Types of Machine Learning

- Supervised Learning:
    - The process of using machine learning algorithms on a labelled dataset. A labelled dataset is one that has some input features and has an associated output feature we're trying to acheive
        - House Prices: Given a number of rooms and square footage calculating the sell price of the house
        - Spam Email Classification: Given a number of emails classify them as either spam or not spam
    - The idea with supervised learning is you have a dataset with "correct" labels attached (i.e. we have a house with 4 bedrooms and it's 2000 sqft and it sold for $500,000). We can use the combination of input and output features to make our model more accurate


- Unsupervised Learning: 
    - The opposite of supervised learning. This process involves using an algorithm on an unlabelled set of data to uncover hidden features within the data itself. 
        - Customer Segmentation: We have info about customer's browsing habits and purchase history, what are some hidden pieces of data that we can uncover that make it easier to sell to them
            - For example: We run some algorithm and it clutsers people who buy purses together with people who by cardigans. We can take that data and maybe a run a sale on them together or create some matching apparel that would appeal to this group and likely sell better


- Semi-supervised Learning:
    - The combination or middle ground between Supervised and Unsupervised. This often starts with using the smaller, labelled dataset to guide initial model setup and then tests that model against the unlabelled dataset to uncover new connections or information about the data. Generally used as a cost-effective alternative if it costs too much to label data


- Reinforcement Learning:
    - This is a type of machine learning that learns as it goes. It has weights (positive and negative) to guide the decision making process of the model, so it reinforces good behavior and punishes poor behavior in an attempt to build a better model overall.

### Machine Learning Algorithms

- Neural networks: Neural networks  simulate the way the human brain works, with a huge number of linked processing nodes. Neural networks are good at recognizing patterns and play an important role in applications including natural language translation, image recognition, speech recognition, and image creation.
    - Uses a series of node called neurons that perform some calculation based off the input features and the interal weights of the node (normally this means we'll have a weight for each input feature and we'll multiply the weight by the feature itself). This will allow the network to make some decision (predicition or a classification) and then the accuracy of this is usually checked against the label of the data and a process call back propigation is used to update the weights and make the model more accurate.
     

- Linear regression: This algorithm is used to predict numerical values, based on a linear relationship between different values. For example, the technique could be used to predict house prices based on historical data for the area.

- Logistic regression: This supervised learning algorithm makes predictions for categorical response variables, such as “yes/no” answers to questions. It can be used for applications such as classifying spam and quality control on a production line.

- Clustering: Using unsupervised learning, clustering algorithms can identify patterns in data so that it can be grouped. Computers can help data scientists by identifying differences between data items that humans have overlooked.

- Decision trees: Decision trees can be used for both predicting numerical values (regression) and classifying data into categories. Decision trees use a branching sequence of linked decisions that can be represented with a tree diagram. One of the advantages of decision trees is that they are easy to validate and audit, unlike the black box of the neural network.

- Random forests: In a random forest, the machine learning algorithm predicts a value or category by combining the results from a number of decision trees.

