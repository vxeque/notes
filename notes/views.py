# from rest_framework import viewsets
# from serializers import NotesSerializers
# from .models import Notes

# # Create your views here.
# class NotesView(viewsets.ModelViewSet): 
#     serializer_class = NotesSerializers
#     queryset = Notes.objects.all()

from rest_framework import viewsets
from .models import Notes
from .serializers import NotesSerializers

# Create your views here.
class NotesView(viewsets.ModelViewSet):
    serializer_class = NotesSerializers
    queryset = Notes.objects.all()
