from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, EventViewSet

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
