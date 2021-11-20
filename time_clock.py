import datetime
import requests
import json
import time
import os

clearConsole = lambda: os.system('cls' if os.name in ('nt', 'dos') else 'clear')

request_url = 'http://worldclockapi.com/api/json/est/now'

def get_time_from_url():
    response = requests.get(request_url).json()
    unix_time_from_api = response['currentFileTime']
    value = datetime.datetime(1601, 1, 1) + datetime.timedelta(seconds=unix_time_from_api/10000000) ### combine str 3 and 4  
    print(value.strftime('%Y-%m-%d %H:%M:%S'))
    time.sleep(1)
    clearConsole()

def get_time_from_os():
    print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    time.sleep(1)
    clearConsole()

while True:
    get_time_from_os()