# Hellometer Case Study

## Summary
This is a project that analyzes the data of the drive-thru orders for four restaurants of the same chain on a single day. The data is available in four separate .csv files.

## How to Run the Project
### Prequesites
Ensure you have Docker installed.
Download necessary csv's and save them somewhere you can find them.

### To run this project on your local machine, follow these steps:
- Clone this repository to your local machine.
- Open a terminal window and navigate to the project directory.
- Enter `docker compose-up`
- Enter `cd backend`
- Run `python manage.py loadcsv {path of csv file}`. Check logs to ensure data is properly loaded
- Repeat the step above for 3 other csv's
- In a web browser, go to http://localhost:3000 to view the appliciation.

## Functionality
The project has the following functionality:

### DriveThruOrderView
This view provides the following endpoints:

__average_wait_time_by_store_id__: returns the average wait time for each store.
__average_total_time_by_store_id__: returns the average total time for each store.
__generate_drive_thru_scatterplot__: generates a scatter plot of arrival time vs total time for all orders.
__generate_pickup_order_time_scatterplot__: generates a scatter plot of pickup time vs order time for all orders.
__order_count_by_hour__: returns the count of orders by hour of arrival time.

