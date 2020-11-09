import json

with open('dataset-covid-index.json') as json_file:
    dataset = json.load(json_file)

print(json.dumps(dataset["dataset"]["documents"][0], indent=4))