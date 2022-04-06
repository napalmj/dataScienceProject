from rest_framework.serializers import ModelSerializer
from .models import GdpData


class GdpSerializer(ModelSerializer):
    class Meta:
        model = GdpData
        fields = '__all__'