
const Owls = require('../controllers/owls');



module.exports = function(app) {
app.get('/', (req, res) => {  
        Owls.index(req, res)
    });

app.get('/owl/new', (req, res) => {  
            Owls.owlNewPage(req, res)
        });

app.get('/owl/:id', (req, res) => {
    Owls.owlInfoPage(req, res)
})

app.get('/edit', (req, res) => {  
        Owls.owlEditPage(req, res)
    });

app.get('/owl/edit/:name', (req, res) => {
        owls.owlEditing(req, res)
    })



app.post('/owls', (req, res) => {
        owls.owlCreate(req, res)
      })
      

app.post('/owl/edit/:owlName', (req, res) => {
        owls.owlEditing2
      })

app.get('/delete', (req, res) => {  
            owls.owlDestroyPage(req, res)
        });

app.get('/owl/destroy/:id', (req, res) => {
           owls.owlDestroy(req, res)
          })

}