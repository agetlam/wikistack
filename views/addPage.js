const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    
    <div class="form-group">
    <label for="AuthorName" class="col-sm-2 control-label">Author Name</label>
    <div class="col-sm-10">
      <input id="author" name="author" type="text" class="form-control"/>
    </div>
  </div>
    
    
    <div class="form-group">
    <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
    <div class="col-sm-10">
      <input id="email" name="email" type="text" class="form-control"/>
    </div>
  </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="text" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <input id="content" name="content" type="text" class="form-control"/>
      </div>
    </div>
    <div class="form-group">
     <label for="title" class="col-sm-2 control-label">Status</label>
     <div class="col-sm-10">
       <input id="title" type="radio" name="status" value="open" checked> Public<br>
       <input id="title" type="radio" name="status" value="closed"> Private<br>
     </div>
   </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="POST" class="btn btn-primary">POST</button>
    </div>
  
  </form>
`);