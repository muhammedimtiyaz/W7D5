export const fetchBenchesAjax = () => {
  return $.ajax({
    method: "GET",
    url: "/api/benches",
    error: (err) => console.log(err)
  });
};

window.fetchBenchesAjax = fetchBenchesAjax;