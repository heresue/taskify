import { cookies } from 'next/headers';
import { getItem } from '@/utils/localstorage';

export function createApi<T>(
  baseConfig: {
    baseURL?: string;
    headers?: Record<string, string>;
  } = {}
) {
  const { baseURL = process.env.NEXT_PUBLIC_API_BASE_URL, headers: baseHeaders = {} } = baseConfig;

  const getAccessToken = async (): Promise<string | undefined> => {
    if (typeof window === 'undefined') {
      const cookie = await cookies();
      return cookie.get('accessToken')?.value;
    } else {
      return getItem<string>('accessToken') ?? undefined;
    }
  };

  const fetcher = async (
    url: string,
    options: RequestInit & {
      data?: any;
      formData?: FormData;
      next?: NextFetchRequestConfig;
    } = {}
  ): Promise<T> => {
    const { data, formData, next, headers, ...restOptions } = options;
    const accessToken = getAccessToken();

    const fetchOptions: RequestInit & { next?: NextFetchRequestConfig } = {
      ...restOptions,
      headers: {
        ...baseHeaders,
        ...headers,
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    };

    if (formData) {
      fetchOptions.body = formData;
    } else if (data && options.method && options.method !== 'GET') {
      fetchOptions.headers = {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      };
      fetchOptions.body = JSON.stringify(data);
    }

    if (next) {
      fetchOptions.next = next;
    }

    const response = await fetch(`${baseURL}${url}`, fetchOptions);

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json() as Promise<T>;
    }

    return {} as T;
  };

  return {
    get: (
      url: string,
      options: Omit<RequestInit, 'method'> & { next?: NextFetchRequestConfig } = {}
    ) => fetcher(url, { ...options, method: 'GET' }),

    post: (
      url: string,
      dataOrFormData?: any | FormData,
      options: Omit<RequestInit, 'method' | 'body'> & { next?: NextFetchRequestConfig } = {}
    ) => {
      if (dataOrFormData instanceof FormData) {
        return fetcher(url, { ...options, method: 'POST', formData: dataOrFormData });
      }
      return fetcher(url, { ...options, method: 'POST', data: dataOrFormData });
    },

    put: (
      url: string,
      dataOrFormData?: any | FormData,
      options: Omit<RequestInit, 'method' | 'body'> & { next?: NextFetchRequestConfig } = {}
    ) => {
      if (dataOrFormData instanceof FormData) {
        return fetcher(url, { ...options, method: 'PUT', formData: dataOrFormData });
      }
      return fetcher(url, { ...options, method: 'PUT', data: dataOrFormData });
    },

    delete: (
      url: string,
      options: Omit<RequestInit, 'method'> & { next?: NextFetchRequestConfig } = {}
    ) => fetcher(url, { ...options, method: 'DELETE' }),
  };
}

export const api = createApi({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});
