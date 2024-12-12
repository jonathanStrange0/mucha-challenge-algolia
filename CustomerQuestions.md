# Question 1:
Hello,


I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:


Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."


Cheers, George


## Response 1


Hello George,


I'd be happy to help you with these concepts. Here are the definitions you requested:


Records: A record is a single data entity that you want to make searchable. For example, if you have a database of books, each book would be a record. They represent the smallest unit of data that can be searched. They are the individual pieces of data your search engine will be searching through.


- As an example, if you’re running an e-commerce store, each product in your inventory would be a record. A record for a product might look like this:


```json
{
 "objectID": "12345",
 "name": "Red T-Shirt",
 "category": "Clothing",
 "price": 25.99,
 "rating": 4.5
}
```
This matters because each record is indexed and made searchable.


Here is some documentation that can help explain indexing a little further: https://beta.algolia.com/doc-beta/guides/sending-and-managing-data/prepare-your-data/in-depth/what-is-in-a-record


Indexing is the process of organizing your data to make it searchable quickly. When data is sent to Algolia, we process that data to index each record with the attributes you want to make searchable. This process is what allows you to search through your records quickly and efficiently.


Finally, Custom Ranking Metrics allow you to prioritize search results based on specific attributes. For example if you are running an e-commerce store, you might want to prioritize products with higher ratings to return first in search results. This can be done by creating a custom ranking metric that is a combination of relevance and the rating of the product. Then, when a user searches for a product, the search engine will prioritize matching products with higher ratings.


Another easy way to think about this is to think of custom rankins as multiple data sort fields in a spreadsheet. You could sort a spreadsheet of orders for  your store as a combination of buyer, order date and order total for instance.


Here is some documentation that can help explain in more depth: https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/


I hope this information has been helpful. If you have any further questions, please don't hesitate to ask. The Sales Engineering team at Algolia will be happy to help you.


Cheers,


Jonathan Mucha.


















# Question 2:
Hello,


Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.


Regards, Matt


## Response 2


Hello Matt,


Thank you for your feedback. We are always looking to improve our products and services, and feedback like yours is invaluable to us, the only thing I don't like hearing is that we have disappointed a customer. I will pass your feedback along to our product team.


In the meantime, I can provide you with a workaround that might help you with your current situation. You can use the Algolia API to manage indexes and records. This will allow you to automate the process and make it more efficient. Here is some documentation that can help you get started with the API: https://www.algolia.com/doc/api-client/methods/manage-indices/


We also offer a CLI that can help you manage your indexes and records from the command line. Here is some documentation that can help you get started with the CLI: https://www.algolia.com/doc/tools/cli/


If neither of these workarounds suit your needs however, I would love to hear more about your use case and how we can improve our dashboard to better suit your needs. Would you be open to a call to discuss this further?


I hope this information has been helpful. If you have any further questions, please don't hesitate to ask. The Sales Engineering team at Algolia will be happy to help you.


Cheers,
Jonathan Mucha


# Question 3:


Hi,


I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?


Regards, Leo


## Response 3


Hi Leo,


Thank you for reaching out. Integrating Algolia into your website is a relatively straightforward process. While the exact amount of effort depends on your website and data, we've designed Algolia to be user friendly. The high-level process looks something like this:


1.Index your data


- You will need to send us the data you want to make searchable. This can be done through our API or one of our SDKs. Here is some documentation that can help you get started: https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/
- This usually takes about 1 hour for small to medium-sized datasets.


2. Configure your search


- Define what fields you would like to be searchable. For instance, if you have an e-commerce store, you might want to make the product name, description, and price searchable. Here is some documentation that can help you get started: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/
- This usually takes minutes to complete.


3. Integrate the search into your website


- This is where things get exciting! You can use our InstantSearch libraries to build a search experience that fits your website. Here is some documentation that can help you get started: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/
- This is the more complicated step in the process because it involves integrating Algolia into your website. We have tried to make this as easy as possible by providing libraries for popular frameworks like React, Angular, and Vue.js, as well as plugins for platforms like Shopify and Magento. You can find plugin documentation here in our docs under the "Integrations" section: https://www.algolia.com/doc/


Once the above is completed, you will have a fully functional search experience on your website. From there we recommend you iterate on your search experience to make it even better. We have a lot of resources to help you with this, including our documentation, blog, and support team.


Thank you again for your interest in Algolia. If you have any further questions, please don't hesitate to ask. The Sales Engineering team at Algolia will be happy to help you.


Cheers,


Jonathan Mucha.



