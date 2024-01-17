export default defineEventHandler((event) => {
  console.log(`Request from:  ${getRequestURL(event)}`);
});
