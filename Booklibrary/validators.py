import PyPDF2 
from django.core.exceptions import ValidationError

def validateDocumentPageLimit(value):
    if value.name.endswith(".pdf"):
        pdf = PyPDF2.PdfReader(value)
        if len(pdf.pages) > 50:
            raise ValidationError("The document must not exceed 50 pages")