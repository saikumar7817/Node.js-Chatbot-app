provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "example" {
  ami           = "ami-01b6d88af12965bb6" # Amazon Linux 2 AMI for ap-south-1
  instance_type = "t2.micro"
  key_name      = "dockerec2keypair"     # Replace with your actual key pair name

  tags = {
    Name = "chatbot"
  }
}
