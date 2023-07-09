from django.urls import path, include
from rest_framework import routers
from notes import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'notes', views.NotesView, 'notes')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Notes API'))
]

