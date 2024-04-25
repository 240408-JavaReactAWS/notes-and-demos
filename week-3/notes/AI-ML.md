# Artificial Intelligence and Machine Learning
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

### Generative AI (Gen AI)

Generative artificial intelligence (AI) describes algorithms (such as ChatGPT) that can be used to create new content, including audio, code, images, text, simulations, and videos. Using these we can produce code, text, any sort of content more quickly and easily. Gen AI uses thousands or millions of examples on unlabelled data that it learns patterns from to produce new content based off that original content


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


## LLM (Large Language Models)
A large language model (LLM) is a type of artificial intelligence (AI) program that can recognize and generate text, among other tasks. LLMs are trained on huge sets of data — hence the name "large." LLMs are built on machine learning: specifically, a type of neural network called a transformer model.

In simpler terms, an LLM is a computer program that has been fed enough examples to be able to recognize and interpret human language or other types of complex data. Many LLMs are trained on data that has been gathered from the Internet — thousands or millions of gigabytes' worth of text. But the quality of the samples impacts how well LLMs will learn natural language, so an LLM's programmers may use a more curated data set.

LLMs are then further trained via tuning: they are fine-tuned or prompt-tuned to the particular task that the programmer wants them to do, such as interpreting questions and generating responses, or translating text from one language to another.

Chat-GPT is one example of an LLM that can be used for a variety of purposes

LLMs are built upon transformer model Neural Networks that allow them to take in a sequence of data (like a sentence) and use the position and value of each word in the sentence to get the general contextual meaning of the sentence itself. It then becomes able to predict the next most possible word or phrase that may follow and uses this to generate a new response in human-readable language

## Prompt Engineering

Generative artificial intelligence (AI) systems are designed to generate specific outputs based on the quality of provided prompts. Prompt engineering helps generative AI models better comprehend and respond to a wide range of queries, from the simple to the highly technical.

### Prompt Engineering Use-Cases
- Chatbots
- Healthcare
- Software Development
- Software Engineering
- Cybersecurity and Computer Science

### How do we Prompt Engineer?

- Providing a persona
    - The concept of Persona in software development refers to the creation of fictitious user profiles that represent the different types of users who might use the software.
    - "Act as a HR Representative for our company, your goal is to handle HR related requests and give appropriate responses on what to do via company policy. Do not answer any non-related questions about topics other than HR"

- n-Shot prompting
    - Zero-Shot Prompting
        - Typical, generic prompting. You provide a statement or a query on what you want the LLM to do and from there it does its best to produce what you want even if it has never seen it before

    - Few-Shot Prompting
        - Providing examples in your prompt. LLMs are trained on extraodinarily large datasets and do not need to be retrained but can be focused by providing a small number of examples (this is similar to how you can provide some simple company documents to an LLM and it can become a representative of those rules). By providing these examples you can have the LLM perform taks that you could not specifically articulate or have the llm perform tasks it was struggling with previously.

### Preventing Hallucinations

An LLM hallucination occurs when a large language model (LLM) generates a response that is either factually incorrect, nonsensical, or disconnected from the input prompt. Hallucinations are a byproduct of the probabilistic nature of language models, which generate responses based on patterns learned from vast datasets rather than factual understanding.

- Causes:
    - Vague or overly broad prompts
    - Insufficient Domain Knowledge
    - Limited training data
    - Uncertainty in language

- Solutions:
    - Provide richer context. 
    - Apply domain adaptation. 

    - RAG it. RAG is a technique that augments the prompt with additional information that is passed to the LLM, often by accessing a vector database of text or code. This allows the context window tobe augmented by near real time data so the model tends to hallucinate less. Additionally, Extensions allow the model to access and retrieve relevant information from a database or API then apssing the additional context, in addition to the prompt, to the model.

    - Use reasoning and iterative querying. 
    
    - Increase the specificity and clarity of your prompts. 

    - Use examples; few-shot , in-context learning. 

    - Break down complex tasks into simpler steps. 

    - Chain-of-thought: CoT It. Ask the model to explain the steps it took to arrive at the answer, this will allow you to evaluate the micro steps it took to arrive at the completion.

    - Diversify the information sources used for factual grounding.