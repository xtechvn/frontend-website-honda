using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Configuration;
using System.Net.Mail;
using System.Net;
using System.Reflection;

namespace Front_End.Services
{
    public class MailService
    {
        private IConfiguration configuration;
        public MailService(IConfiguration _configuration)
        {
            configuration = _configuration;
        }
        public bool sendMail(string name, string phone, string type, string selectedRadio)
        {
            bool ressult = true;
            try
            {
                MailMessage message = new MailMessage();

                var subject = "XÁC NHẬN ĐƠN HÀNG "+ name + " " + DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss");
                message.Subject = subject;
                var html = "<table style='border: 1px solid #b3c7db;color: #0c0c0b;border-collapse: collapse;width: 100%;'> <tbody>     <tr>         " +
                    "<th style='border: 1px solid #b3c7db;color: #0c0c0b;'>Họ tên </th>" +
                    "<th style='border: 1px solid #b3c7db;color: #0c0c0b;'>Số điện thoại</th>   " +
                    "<th style='border: 1px solid #b3c7db;color: #0c0c0b;'>Loại xe</th>" +
                    "<th style='border: 1px solid #b3c7db;color: #0c0c0b;'>Loại thanh toán</th>" +
                    "</tr><tr>" +
                    "<td style='border: 1px solid #b3c7db;color: #0c0c0b;text-align: center;'>" + name + "</td>" +
                    "<td style='border: 1px solid #b3c7db;color: #0c0c0b;text-align: center;'>" + phone + "</td>" +
                    "<td style='border: 1px solid #b3c7db;color: #0c0c0b;text-align: center;'>" + type + "</td>" +
                    "<td style='border: 1px solid #b3c7db;color: #0c0c0b;text-align: center;'>" + selectedRadio + "</td>" +
                    "</tr>\r\n</tbody>\r\n</table>";
                //configsendemail
                string from_mail = configuration["MAIL_CONFIG:FROM_MAIL"];
                string account = configuration["MAIL_CONFIG:USERNAME"];
                string password = configuration["MAIL_CONFIG:PASSWORD"];
                string host = configuration["MAIL_CONFIG:HOST"];
                string port = configuration["MAIL_CONFIG:PORT"];
                message.IsBodyHtml = true;
                message.From = new MailAddress(from_mail,"Hondavn");
                message.Body = html;
                string sendEmailsFrom = account;
                string sendEmailsFromPassword = password;
                SmtpClient smtp = new SmtpClient(host, Convert.ToInt32(port));
                smtp.EnableSsl = true;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Credentials = new NetworkCredential(sendEmailsFrom, sendEmailsFromPassword);
                smtp.Timeout = 20000;
                //message.To.Add("anhhieuk50@gmail.com");
                message.To.Add("hondavn.net@gmail.com");

                smtp.Send(message);

            }
            catch (Exception ex)
            {
                string error_msg = Assembly.GetExecutingAssembly().GetName().Name + "->" + MethodBase.GetCurrentMethod().Name + "=>" + ex.Message;
                return false;
            }
            return ressult;
        }
    }
}
