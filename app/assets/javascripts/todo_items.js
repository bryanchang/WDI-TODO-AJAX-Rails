function createListDOM(todoItem){
  var list = $('<li />');
  var checkbox = $('<input />').attr('type', 'checkbox').attr('class', 'completed');
  checkbox.appendTo(list);
  list.append(todoItem.name);
  var trash_img = $('<img />').attr('src', '/assets/trash.svg').attr('class', 'trash');
  trash_img.appendTo(list);
  $('#todo_list').append(list);
  list.hide().fadeIn();
  $('#todo_input').val('');  //clear the text box
  
  // if (todoItem.completed) {
  //   completeDOMElement(listElement);
  // }
}

$(document).ready(function(){
	$("#add").on('click', function(){
		// event.preventDefault();
		// var form = $(this);
		// var name = $('#todo_input').val();

		$.ajax({
			url: "/todo_items",
			method: "post",
			data: {"todo_item": {"name": $('#todo_input').val(), "completed": false}},
			dataType: "json",
			success: createListDOM,
			/* ---------------made into createListDOM function---------
				var todoInput = $("<span>" + $("#todo_input").val() + "</span>");
				var list = $("<li></li>");
				var checkbox = $("<input class='checkbox' type='checkbox'>");
				var img = $("<img class='trash' src='trash.svg'>");
			},
			*/
			error: function(){
				alert("Server issue.");
			}
		});	
	});
});
