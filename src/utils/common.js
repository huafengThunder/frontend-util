export function isLinkBase64 (txtContent) {
  let check_www = 'w{3}' + '[^\\s]*';
  let check_http = '(https|http|ftp|rtsp|mms)://' + '[^\\s]*';
  let strRegex = check_www + '|' + check_http;
  let httpReg = new RegExp(strRegex, 'gi');
  let base64 = new RegExp(/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!&',()*+;=\-._~:@/?%\s]*?)\s*/, 'gi');
  return httpReg.test(txtContent) || base64.test(txtContent);
}