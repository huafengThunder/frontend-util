export default function judgePlatform () {
  let ua = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipod|phone|ipad/i.test(ua);
}