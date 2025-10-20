export default function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!"); //supaya nda kena warning CSP
    }, 2000); // 2 detik
  });
}
