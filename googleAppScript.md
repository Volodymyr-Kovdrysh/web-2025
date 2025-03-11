# .env
VITE_apiURL=https://script.google.com/macros/s/AKfycbzATtSRrRl90KS1Yqi3I9LhoQsdtE6OOGg6TiiIaYlc5oiSKctpEF4zlmE_ogYhkQMTqQ/exec

# main.gs

```js
const idDB = '11K7zs8gGiSs8XuAIzey5w475rzvJHIkWxIQ2ExlOkPc'
const ss = SpreadsheetApp.openById(idDB)
const sheet_feedbacks = ss.getSheetByName('feedbacks')

function GET(){
    const res = getDataFromSpreadSheet()

    return res

}


function POST(obj){
    const {id, rating, text} = obj



    sheet_feedbacks.appendRow([id, rating, text])


    return GET()
}


function DELETE(id){

    const victimRowID = sheet_feedbacks.getDataRange().getValues().map((r,idx) => [idx + 1, ...r]).filter(r => r[1].toString() === id.toString())[0][0]

    sheet_feedbacks.deleteRow(victimRowID)

    return GET()
}


function PUT(obj){

    const {id, rating, text} = obj

    const targetRowID = sheet_feedbacks.getDataRange().getValues().map((r,idx) => [idx + 1, ...r]).filter(r => r[1].toString() === id.toString())[0][0]

    sheet_feedbacks.getRange(targetRowID,2,1,2).setValues([[rating, text]])

    return GET()
}


function doGet(request) {

    const {method, id, rating, text} = request.parameter

    if (method === 'GET'){
        const JSONString =  JSON.stringify(GET())
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput

    }

    if (method === 'POST'){
        const JSONString =  JSON.stringify(POST({id, rating, text}))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput
    }


    if (method === 'DELETE'){
        const JSONString =  JSON.stringify(DELETE(id))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput
    }

    if (method === 'PUT'){
        const JSONString =  JSON.stringify(PUT({id, rating, text}))
        const JSONOutput = ContentService.createTextOutput(JSONString);
        JSONOutput.setMimeType(ContentService.MimeType.JSON);
        return JSONOutput

    }



    const JSONString = JSON.stringify({msg: "Something bad!"})
    const JSONOutput = ContentService.createTextOutput(JSONString)
    JSONOutput.setMimeType(ContentService.MimeType.JSON)

    return JSONOutput
}

```

# utils.gs

```js
function getDataFromSpreadSheet(){
  const res = {}

const ss = SpreadsheetApp.openById(idDB)

const sheet = ss.getSheetByName('feedbacks')

const data = sheet.getDataRange().getValues()

const headers = data[0]

res.feedbacks = data.slice(1).map( r => {
  const tmp = {}
  tmp.id = r[0]
  tmp.rating = r[1]
  tmp.text = r[2]

  return tmp
})

  return res

}


// {
//       "id": "3",
//       "rating": 8,
//       "text": "Comment from backend 3"
//     },
```
