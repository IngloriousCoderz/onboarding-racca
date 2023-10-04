// sequence

$.getJSON(
  url1,
  (response1) => {
    $.getJSON(
      url2,
      (response2) => {
        $.getJSON(
          url3,
          (response3) => {},
          (error3) => {}
        );
      },
      (error2) => {}
    );
  },
  (error1) => {}
);

const handleResponse3 = (response3) => {
  console.log(response3);
};

const handleError3 = (error3) => {
  console.error(error3);
};

const handleResponse2 = (response2) => {
  $.getJSON(url3, handleResponse3, handleError3);
};

const handleError2 = (error2) => {
  console.error(error2);
};

const handleResponse1 = (response1) => {
  $.getJSON(url2, handleResponse2, handleError2);
};

const handleError1 = (error1) => {
  console.error(error1);
};

$.getJSON(url1, handleResponse1, handleError1);

// parallel

let result1, result2;

$.getJSON(url1, (response1) => {
  result1 = response1;
});
$.getJSON(url2, (response2) => {
  result2 = response2;
});

setTimeout(() => {
  console.log(result1, result2);
}, 3000);

// promises
{
  const promise = $.getJSON(url);

  promise.then((response) => {}); // resolved, fulfilled
  promise.catch((error) => {}); // rejected, failed
  promise.finally(() => {});

  // try {
  // } catch (error) {
  // } finally {
  // }
}

// sequence

$.getJSON(url1).then((response1) => {
  $.getJSON(url2).then((response2) => {
    $.getJSON(url3).then((response3) => {});
  });
});

$.getJSON(url1)
  .then((response1) => $.getJSON(url2))
  .then((response2) => $.getJSON(url3))
  .then((response3) => {})
  .catch((error) => {})
  .finally(() => {});

// parallel

{
  const promise = Promise.all([$.getJSON(url1), $.getJSON(url2)]);
  promise.then(([response1, response2]) => {});
}

// async/await

async function fetchDataInSequence() {
  try {
    const response1 = await $.getJSON(url1);
    const response2 = await $.getJSON(url2);
    const response3 = await $.getJSON(url3);
    console.log(response1, response2, response3);
  } catch (error) {
  } finally {
  }
}

async function fetchDataInParallel() {
  try {
    const [response1, response2, response3] = await Promise.all([
      $.getJSON(url1),
      $.getJSON(url2),
      $.getJSON(url3),
    ]);
    console.log(response1, response2, response3);
    return 42;
  } catch (error) {
  } finally {
  }
}

// console.log(fetchDataInParallel())
fetchDataInParallel().then(console.log);

async function printData() {
  const result = await fetchDataInParallel();
  console.log(result);
}
