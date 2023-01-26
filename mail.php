<?
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
	
if (!isset($_POST["title"], $_POST["name"], $_POST["phone"], $_POST["email"], $_POST["content"])) {
	echo '<script>alert("필수 항목을 입력해주세요.");history.back();</script>';
	exit;
}

$template = '
<!DOCTYPE html>
<html lang="ko" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    table, td, div, h1, p {font-family: sans-serif;}
  </style>
</head>
<body style="margin:0;padding:0;">
  <table role="presentation" style="display:flex;width:100%;border-collapse:collapse;border:none;border-spacing:0;background:#ffffff;">
    <tr>
		<td style="width:100%;text-align:left;" align="left">
			<img>
		</td>
	</tr>
	<tr>
      <td align="center" style="padding:0;">
        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
          <tr>
            <td align="center" style="padding: 10px;background:#52ADDD;">
              <h2 style="color:white;">NC Nature 문의가 도착하였습니다.</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px 42px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 36px 0;color:#153643;">
                    <h4 style="margin:0 0 20px 0;font-family:sans-serif;">작성자 입력 정보</h4>
                    <p style="margin:0 0 12px 0;font-size:14px;line-height:24px;font-family:Arial,sans-serif;">
						구분: '.$_POST["category"].'<br />
						제목: '.$_POST["title"].'<br />
						이름: '.$_POST["name"].'<br />
						연락처: '.$_POST["phone"].'<br />
						이메일: '.$_POST["email"].'<br />
						문의사항<br /><br />'.$_POST["content"].'<br />
					</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;background:#52ADDD;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%;" align="center">
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                      Copyright 2023, NC Nature<br/>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
';

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->SMTPDebug = 0;
$mail->isSMTP();

$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;         // SMTP 인증을 사용함
$mail->Username = 'peterku@majorworld.co.kr';
$mail->Password = 'ycsuafdyzguuktim';    // smtp 메일 비밀번호
$mail->SMTPSecure = 'ssl';      // SSL을 사용함
$mail->Port = 465;              // email 보낼때 사용할 포트를 지정
$mail->CharSet = 'utf-8';       // 문자셋 인코딩

$mail->From = 'system@no-reply.com';
$mail->FromName = 'NCNature';
$mail->addAddress('ncnature@mwd.kr', '담당자');

$mail->IsHTML(true);
$mail->Subject = $_POST[ "name" ].'님으로부터 문의메일이 도착하였습니다.';
$mail->Body = $template;
$mail->AltBody = "";
$mail->send();

if($_GET['lang'] == 'us'){
   echo '<script>alert("Your inquiry has been received.");location.href="http://ncnature.co.kr/eng/eng.html";</script>';
} else {
    echo '<script>alert("문의를 전달하였습니다.");location.href="http://ncnature.co.kr";</script>';
}
?>