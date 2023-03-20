# HM Case Study

## Summary
This is a project that analyzes the data of the drive-thru orders for four restaurants of the same chain on a single day. The data is available in four separate .csv files.

## How to Run the Project
### Prequesites
Ensure you have Docker installed.
Download necessary csv's and save them in a convenient location.

### To run this project on your local machine, follow these steps:
- Clone this repository to your local machine.
- Open a terminal window and navigate to the project directory.
- Run `make build-frontend && make build-backend`
- Run `docker compose-up`
- Run `cd backend`
- Run mgmt command `python manage.py loadcsv {path of csv file}`. Check logs to ensure data is properly loaded
- Repeat the step above for 3 other csv's
- In a web browser, go to http://localhost:3000 to view the appliciation.

## Functionality
The project has the following functionality:

### DriveThruOrderView
This view provides the following endpoints:

 - __average_wait_time_by_store_id__: returns the average wait time for each store.
- __average_total_time_by_store_id__: returns the average total time for each store.
- __generate_drive_thru_scatterplot__: generates a scatter plot of arrival time vs total time for all orders.
- __generate_pickup_order_time_scatterplot__: generates a scatter plot of pickup time vs order time for all orders.
- __order_count_by_hour__: returns the count of orders by hour of arrival time.


## Analysis
Some of the things I noticed about the data was: 
- Store 1501142 and 1501144 have identical data. I would be curious to know more about why that is. My inital thought is that it's an error, so I would probably not use this as I think it may be unreliable, and lead to incorrect conclusions/analysis. As you can see below the avg total time and wait time for each store are identical.
![alt-text](https://i.imgur.com/gfXWVnz.png)
- I was interested to know what the relationship was betwen order time and pickup time so I made a scatterplot illustrating that. Overall there seems to be a moderate pattern in how long one spends ordering and picking up an order. 
![alt-text](https://i.imgur.com/iGYucbH.png)
- The Count of Orders by Hour chart shows that there is a high concentration of orders between 6AM and 9AM which tells me that a lot of people go to this restaurant before work. This insinuates to me that this place serves breakfast. I would be interested to know what days have the highest customer counts. 
![alt-text](https://i.imgur.com/JUVdwST.png)

## Tech Used
- Django Rest Framework
- Python
- React
- TypeScript
- Material UI
- Plotly
- Docker



