# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-27 21:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0005_auto_20170627_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='purpose',
            field=models.CharField(choices=[('updates', 'Update'), ('history', 'History'), ('info', 'Info Page')], max_length=10),
        ),
    ]
