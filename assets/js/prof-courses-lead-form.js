
$('#prof-courses-lead-form').submit(function (e) {
  e.preventDefault();

  var form = $(this)
  var url = form.attr('action')

  const course = $('#prof-courses-lead-form select').val();

  const dataArr = form.serializeArray();
  let newDataArr = [];

  // this is specifically done for `careerbootcamp-professionals.html` page.
  // This page has two fields `firstname` and `lastname` but 
  // there is only `name` field in database
  // so we modify the form before serializing and add `name` field manually
  if (course === 'Placement Bootcamp' || course === 'Summer Internship Bootcamp') {
    for (let item of dataArr) {
      if (item.name === 'firstname' || item.name === 'lastname') continue;
      else newDataArr.push(item);
    }

    newDataArr.push({
      name: 'name',
      value: `${dataArr[0].value} ${dataArr[1].value}`
    })
  } else {
    newDataArr = dataArr
  }


  var request = $.ajax({
    method: "POST",
    url: url,
    data: $.param(newDataArr), // this will serialize the form array
    json: true,
    xhrFields: {
      withCredentials: true
    }
  })

  request.done(function (response) {

    if (window.location.pathname.includes('prof-courses')) {
      const course = $('#prof-courses-lead-form select').val();
      if (course === 'Full Stack Web Development with Data Structures') {
        window.location = 'https://codingblocks.com/prof-full-stack-web-development-with-data-structures.html';
      } else {
        window.location = 'https://codingblocks.com/prof-data-science-and-machine-learning.html';
      }
    } else {
      const congratulationBannerEl = document.getElementById('congratulation-banner');
      const formCardEl = document.getElementById('prof-courses-lead-form');
      formCardEl.style.display = 'none';
      congratulationBannerEl.style.display = 'flex';
      // $('#congratulation-banner span').text(`Congratulation! Your application for "${$('#course').find(":selected").val()}" has been received.`)
    }


  })

  request.fail(function (xhr, textStatus, errorThrown) {
    // show some error
  })
})


$('#prof-courses-lead-form-footer').submit(function (e) {
  e.preventDefault();

  var form = $(this)
  var url = form.attr('action')

  const course = $('#prof-courses-lead-form select').val();

  const dataArr = form.serializeArray();
  let newDataArr = [];

  // this is specifically done for `careerbootcamp-professionals.html` page.
  // This page has two fields `firstname` and `lastname` but 
  // there is only `name` field in database
  // so we modify the form before serializing and add `name` field manually
  if (course === 'Placement Bootcamp') {
    for (let item of dataArr) {
      if (item.name === 'firstname' || item.name === 'lastname') continue;
      else newDataArr.push(item);
    }

    newDataArr.push({
      name: 'name',
      value: `${dataArr[0].value} ${dataArr[1].value}`
    })
  } else {
    newDataArr = dataArr
  }


  var request = $.ajax({
    method: "POST",
    url: url,
    data: $.param(newDataArr), // this will serialize the form array
    json: true,
    xhrFields: {
      withCredentials: true
    }
  })

  request.done(function (response) {

    if (window.location.pathname.includes('prof-courses')) {
      const course = $('#prof-courses-lead-form select').val();
      if (course === 'Full Stack Web Development with Data Structures') {
        window.location = 'https://codingblocks.com/prof-full-stack-web-development-with-data-structures.html';
      } else {
        window.location = 'https://codingblocks.com/prof-data-science-and-machine-learning.html';
      }
    } else {
      const congratulationBannerEl = document.getElementById('congratulation-banner');
      const formCardEl = document.getElementById('prof-courses-lead-form');
      formCardEl.style.display = 'none';
      congratulationBannerEl.style.display = 'flex';
      // $('#congratulation-banner span').text(`Congratulation! Your application for "${$('#course').find(":selected").val()}" has been received.`)
    }


  })

  request.fail(function (xhr, textStatus, errorThrown) {
    // show some error
  })
})

$('#model-prof-courses-lead-form').submit(function (e) {
  e.preventDefault();

  const course = $('#model-prof-courses-lead-form select').val();
  const closeModalButton = $('#model-prof-courses-lead-form-close-button');
  const submitButton = document.querySelector('#model-prof-courses-lead-form-submit-button');
  const errorElement = document.querySelector('#model-prof-courses-lead-form-error-alert');

  // change submit button text to Submitting...
  submitButton.innerHTML = 'Submitting...';

  var form = $(this)
  var url = form.attr('action')





  const dataArr = form.serializeArray();
  let newDataArr = [];

  // this is specifically done for `careerbootcamp-professionals.html` page.
  // This page has two fields `firstname` and `lastname` but 
  // there is only `name` field in database
  // so we modify the form before serializing and add `name` field manually
  if (course === 'Bespoke Placement Bootcamp') {
    for (let item of dataArr) {
      if (item.name === 'firstname' || item.name === 'lastname') continue;
      else newDataArr.push(item);
    }

    newDataArr.push({
      name: 'name',
      value: `${dataArr[0].value} ${dataArr[1].value}`
    })
  } else {
    newDataArr = dataArr
  }



  var request = $.ajax({
    method: "POST",
    url: url,
    data: $.param(newDataArr), // this will serialize the form array
    json: true,
    xhrFields: {
    withCredentials: true
    }
  })

  request.done(function(response) { 

    const formCardEl = document.getElementById('model-prof-courses-lead-form');

    closeModalButton.click();
    formCardEl.reset();

    // change text of button
    submitButton.innerHTML = 'Request a Callback';

  })

  request.fail(function (xhr, textStatus, errorThrown) {
  //   // show some error
      errorElement.style.display = 'block';
      submitButton.innerHTML = 'Request a Callback';
  })
})
