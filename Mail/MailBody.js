const mailBody = (firstName, lastName, email, subject, message) => {
	return (`

<body style="background-color:grey">
	<table align="center" border="0" cellpadding="0" cellspacing="0"
		width="550" bgcolor="white" style="border:2px solid black">
		<tbody>
			<tr style="background-color:red;">
				<td align="center">
					<table align="center" border="0" cellpadding="0"
						cellspacing="0" class="col-550" width="550">
						<tbody>
							<tr>
								<td align="center" style="
										height: 50px;">

									<a href="http://localhost:3000/" style="text-decoration: none;">
										<p style="color:white; 
												font-weight:bold;">
                                                Shop
										</p>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr style="height: 300px;">
				<td align="center" style="border: none;
						border-bottom: 2px solid #4cb96b;
						padding-right: 20px;padding-left:20px">

					<p style="font-weight: bolder;font-size: 42px;
							letter-spacing: 0.025em;
							color:black;">
						${subject}
					</p>
				</td>
			</tr>

			<tr style="display: inline-block;">
				<td style="height: 150px;
						padding: 20px;
						border: none;">
					
					<h2 style="text-align: left;">
                    FirstName: ${firstName} <br>
                    LastName: ${lastName} <br>
					Email: <a href='mailto:${email}'>${email}</a>

				</h2>
					<p class="data"
					style="text-align: justify-all;
							align-items: center;
							font-size: 15px;
							padding-bottom: 12px;">
                        ${message}

					</p>
					<p>
						
					</p>
				</td>
			</tr>
		</tbody>
	</table>
</body>
`)
}
export default mailBody