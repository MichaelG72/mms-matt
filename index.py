import json
import datetime


def handler(event, context):
    """data = {
        'output': 'Hello World',
        'timestamp': datetime.datetime.utcnow().isoformat(),
        'Test': 'Trying to write. Does it work?'
    }"""
    return {'statusCode': 200,
            'body': json.dumps(event),
            'headers': {'Content-Type': 'application/json'}}
