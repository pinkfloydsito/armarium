from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View, TemplateView
from react.render import render_component
import os
from django.conf import settings
from woocommerce import API

wcapi = API(
    url="http://armarium.ec",
    consumer_key='ck_4c55ccf5c667768a6f4f22d3405255d71e69ae41',
    consumer_secret='cs_fa1aeaeaf28b48f677922fe09475b0f95b8ebc8b',
    wp_api=True,
    version="wc/v2"
)


class DashboardView(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super(DashboardView, self).get_context_data(**kwargs)
        return context


class FormView(TemplateView):
    req = wcapi.get("products")
    template_name = 'home.html'
    path = os.path.abspath(os.path.join(settings.BASE_DIR,
                                        '..',
                                        'armarium.renderer/src',
                                        'main.js'))
    store = {'component': 'main.js'}
    store['props'] = {'products': req.json()}
    rendered = render_component(
        path, {
            'products': req.json(),
        },
        to_static_markup=True,
    )

    def get_context_data(self, **kwargs):
        context = super(FormView, self).get_context_data(**kwargs)
        context['data'] = {
            'rendered': self.rendered,
            'store': self.store
        }
        return context
