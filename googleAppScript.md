# .env
VITE_apiURL=https://script.google.com/macros/s/AKfycbzATtSRrRl90KS1Yqi3I9LhoQsdtE6OOGg6TiiIaYlc5oiSKctpEF4zlmE_ogYhkQMTqQ/exec

# main.gs

```js
function doGet(request) {
    const JSONString = JSON.stringify(getDataFromSpreadSheet())
    const JSONOutput = ContentService.createTextOutput(JSONString)
    JSONOutput.setMimeType(ContentService.MimeType.JSON)
    
    return JSONOutput
    }
```

# utils.gs

```js
const idDB = '11K7zs8gGiSs8XuAIzey5w475rzvJHIkWxIQ2ExlOkPc'

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
